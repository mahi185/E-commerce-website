package com.example.sales_savvy.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sales_savvy.entity.Users;
import java.util.Optional;


public interface UserRepository extends JpaRepository<Users, Integer>{

    Optional <Users> findByEmail(String email);
     Optional <Users> findByUsername(String username);
}
