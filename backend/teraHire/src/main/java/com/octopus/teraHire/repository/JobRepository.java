package com.octopus.teraHire.repository;

import com.octopus.teraHire.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;


public interface JobRepository extends JpaRepository <Job, UUID>{
    boolean existsById(UUID id);

}
