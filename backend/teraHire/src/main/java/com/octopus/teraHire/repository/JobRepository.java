package com.octopus.teraHire.repository;

import com.octopus.teraHire.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.scheduling.annotation.Async;
import org.springframework.util.concurrent.ListenableFuture;

import java.time.LocalDateTime;
import java.util.List;


public interface JobRepository extends JpaRepository <Job, Long>{
    boolean existsById(Long id);
   /* @Query("select j from Job j order by j.createdDate DESC")
    List<Job> findByOrderByCreatedDateDesc();*/
}