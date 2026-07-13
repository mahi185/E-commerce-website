package com.example.sales_savvy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.sales_savvy.entity.JWTToken;

public interface JWTTokenRepository extends JpaRepository<JWTToken,Integer> {
    @Query("SELECT t FROM JWTToken t WHERE t.users.userId = :userId")
    JWTToken findByUserId(@Param("userId") int userId);


}
