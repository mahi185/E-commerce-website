package com.example.sales_savvy.entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Column;


@Entity
@Table(name="jwt_tokens")
public class JWTToken {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

  private Integer tokenId;
  @ManyToOne
  @JoinColumn(name="user_id", nullable=false)
  private Users users;

@Column(nullable=false)
  private String token;

  @Column(nullable=false)

  private LocalDateTime expiresAt;

//   public JWTToken(Integer tokenId, Users user, String token, LocalDateTime expiresAt)
// {
//     super();
//     this.tokenId = tokenId;
//     this.user = user;
//     this.token = token;
//     this.expiresAt = expiresAt;

// }  

public JWTToken(Users user, String token, LocalDateTime expiresAt) {
    super();
    this.users = user;
    this.token = token;
    this.expiresAt = expiresAt;
}
public JWTToken(Integer tokenId, Users users, String token, LocalDateTime expiresAt) {
    this.tokenId = tokenId;
    this.users = users;
    this.token = token;
    this.expiresAt = expiresAt;
}
public JWTToken() {
    super();
}
public Integer getTokenId() {
    return tokenId;
}
public void setTokenId(Integer tokenId) {
    this.tokenId = tokenId;
}
public Users getUsers() {
    return users;
}
public void setUsers(Users users) {
    this.users = users;
}
public String getToken() {
    return token;
}
public void setToken(String token) {
    this.token = token;
}
public LocalDateTime getExpiresAt() {
    return expiresAt;
}
public void setExpiresAt(LocalDateTime expiresAt) {
    this.expiresAt = expiresAt;
}


  

  
}
