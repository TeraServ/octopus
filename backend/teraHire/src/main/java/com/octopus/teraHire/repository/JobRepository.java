package com.octopus.teraHire.repository;

import com.octopus.teraHire.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.scheduling.annotation.Async;
import org.springframework.util.concurrent.ListenableFuture;

import java.time.LocalDateTime;
import java.util.List;


public interface JobRepository extends JpaRepository <Job, Long>{
    @Query("select j from Job j order by j.scoreCard DESC")
    List<Job> findByOrderByScoreCardDesc();
    @Query("select j from Job j order by j.createdDate DESC")
    List<Job> findByOrderByCreatedDateDesc();
    @Query("select j from Job j order by j.createdDate")
    @Async
    ListenableFuture<List<Job>> findByOrderByCreatedDateAsc();
    List<Job> findByCreatedDateOrderByCreatedDateAsc(LocalDateTime createdDate);
    boolean existsById(Long id);

}
