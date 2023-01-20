package com.octopus.teraHire.service;

import com.octopus.teraHire.model.Job;
import org.apache.coyote.Response;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.UUID;


public interface JobInterface {
    List<Job> getJobList();
    ResponseEntity<Job> addNewJob(Job job);
    ResponseEntity deleteJobById(UUID uuid);
    ResponseEntity<Job> updateJob(UUID uuid, Job job);
}
