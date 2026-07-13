package com.example.sales_savvy.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.sales_savvy.entity.Users;
import com.example.sales_savvy.repository.UserRepository;
import com.example.sales_savvy.entity.Role;

@Service
public class UserService {
   private final UserRepository userRepo;
   private final  BCryptPasswordEncoder passwordEncoder;
   @Autowired
   UserService(UserRepository userRepo, BCryptPasswordEncoder passwordEncoder) {
    this.userRepo = userRepo;
    this.passwordEncoder = passwordEncoder;
   }
   public Users registerUser(Users user) {
       System.out.println("Register method called: " + user.getUsername());
    if (userRepo.findByUsername(user.getUsername()).isPresent()) {
       throw new RuntimeException("Username already exists");
    }
    if (userRepo.findByEmail(user.getEmail()).isPresent()) {
        throw new RuntimeException("Email already exists");

    }
    user.setPassword(passwordEncoder.encode(user.getPassword()));
    user.setRole(Role.CUSTOMER);
      return userRepo.save(user);
   }
 }

