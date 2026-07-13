package com.example.sales_savvy.services;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.time.LocalDate;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.sales_savvy.entity.JWTToken;
import com.example.sales_savvy.entity.Users;
import com.example.sales_savvy.repository.JWTTokenRepository;
import com.example.sales_savvy.repository.UserRepository;
import io.jsonwebtoken.Jwts;
import java.util.Date;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import java.util.Optional;

@Service
public class AuthService {
 private final Key SIGNING_KEY;
 private final UserRepository userRepository;
 private final JWTTokenRepository jwtTokenRepository;
 private final BCryptPasswordEncoder passwordEncoder;
 public AuthService(UserRepository userRepository, JWTTokenRepository jwtTokenRepository,
        BCryptPasswordEncoder passwordEncoder, @Value("${jwt.secret}") String jwtSecret) {
    this.userRepository = userRepository;
    this.jwtTokenRepository = jwtTokenRepository;
    this.passwordEncoder = passwordEncoder;
    if (jwtSecret.getBytes(StandardCharsets.UTF_8).length < 60) {
        throw new IllegalArgumentException("JWT_SECRET in application.properties must be atleast 64 bytes long for HS512");
    }
    this.SIGNING_KEY=Keys.hmacShaKeyFor(jwtSecret.getBytes(StandardCharsets.UTF_8));

 }
 public Users authenticate(String username, String password)
{
    Users user = userRepository.findByUsername(username).orElseThrow(() -> new RuntimeException("Invalid username or password"));
    if (!passwordEncoder.matches(password, user.getPassword())) {
        throw new RuntimeException("Invalid Username or password");    
    }
    return user;
} 
public String generateToken(Users user) {
    String token;
    LocalDateTime now = LocalDateTime.now();
    JWTToken existingToken = jwtTokenRepository.findByUserId(user.getUserId());
    if (existingToken != null && now.isBefore(existingToken.getExpiresAt())) {
        token=existingToken.getToken();

    }
    else{
        token = generateNewToken(user);
        if (existingToken != null) {
            jwtTokenRepository.delete(existingToken);
        }
        saveToken(user, token);
    }
    return token;
}
private String generateNewToken(Users user) {
    return Jwts.builder().setSubject(user.getUsername()).claim("role", user.getRole()).setIssuedAt(new Date()).setExpiration(new Date(System.currentTimeMillis() + 3600000)).signWith(SIGNING_KEY, SignatureAlgorithm.HS512).compact();
}
public void saveToken(Users user, String token) {
    JWTToken jwtToken = new JWTToken(user, token, LocalDateTime.now().plusHours(1));
    jwtTokenRepository.save(jwtToken);

}

}
