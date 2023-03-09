package com.octopus.teraHire.repository;

import com.octopus.teraHire.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByEmail(String email);
    Optional<User> findByEmail(String email);
    public User findByResetPasswordToken(String token);
    Optional<User> findByUsername(String username);



}