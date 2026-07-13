package com.example.sales_savvy.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sales_savvy.entity.Users;
import com.example.sales_savvy.services.UserService;


@RestController
@RequestMapping("/api/users")
public class UserController {
  private UserService userService;
  @Autowired
   public UserController(UserService userService) {
    this.userService = userService;

   }
   @PostMapping("/register")
   public ResponseEntity registerUser(@RequestBody Users user) {
         
         try {
            Users registeredUser = userService.registerUser((user));
             return ResponseEntity.ok(Map.of("message", "User registered Successfuly", "user", registeredUser));
         } 
         catch(Exception e) {
          // e.printStackTrace();
          return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));

         }
   }
}
