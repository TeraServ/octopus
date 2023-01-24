package com.octopus.teraHire.service;

import com.octopus.teraHire.model.Job;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.concurrent.ExecutionException;


public interface JobInterface {
    List<Job> getJobList();
    List<Job> getTopJobs() throws ExecutionException, InterruptedException;
    ResponseEntity<Job> addNewJob(Job job);
    ResponseEntity deleteJobById(Long id);
    ResponseEntity<Job> updateJob(Long id, Job job);
}
