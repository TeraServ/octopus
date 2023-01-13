package com.octopus.teraHire.repository;

import com.octopus.teraHire.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

public interface UserRepository extends JpaRepository<User,Long> {
}
