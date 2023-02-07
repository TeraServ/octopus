package com.octopus.teraHire.service;

import com.octopus.teraHire.exception.ResourceNotFoundException;
import com.octopus.teraHire.exception.UserExistsException;
import com.octopus.teraHire.model.Job;
import com.octopus.teraHire.repository.JobRepository;
import com.octopus.teraHire.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;


@Service
public class JobService implements JobInterface{
    private JobRepository jobRepository;


    public boolean isJobValid(Long id){
        return jobRepository.existsById(id);
    }
    public JobService(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }
    @Override
    public List<Job> getJobList(){
        return jobRepository.findAll();
    }
    @Override
    public List<Job> getTopJobs()  {
        return jobRepository.findByOrderByCreatedDateDesc();
    }
    @Override
    @Transactional
    public ResponseEntity addNewJob(Job job){
        job.setId(0);
       /* job.setVacancy(job.getActiveCandidates()+ job.getDroppedCandidates());*/
        job.setCreatedDate(getDate());
        job.setModifiedDate(getDate());
        return new ResponseEntity<Job>(jobRepository.save(job), HttpStatus.OK);
        }
    @Override
    public ResponseEntity deleteJobById(Long id){
        if(jobRepository.existsById(id)){
            jobRepository.deleteById(id);
            return new ResponseEntity<>("Success",HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(new ResourceNotFoundException("Job not found with id:"+id).getMessage(),HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public ResponseEntity updateJob(Long id, Job job){
        Job updatedJobDetails = jobRepository.getReferenceById(id);
        if(jobRepository.existsById(id)){
            updatedJobDetails.setTitle((job.getTitle()));
            updatedJobDetails.setOwner((job.getOwner()));
            updatedJobDetails.setStage((job.getStage()));
            updatedJobDetails.setStatus((job.getStatus()));
            updatedJobDetails.setActiveCandidates((job.getActiveCandidates()));
            updatedJobDetails.setDroppedCandidates((job.getDroppedCandidates()));
            /*updatedJobDetails.setVacancy((job.getVacancy()));*/
            updatedJobDetails.setSummary((job.getSummary()));
            updatedJobDetails.setTeamID((job.getTeamID()));
            updatedJobDetails.setScoreCard((job.getScoreCard()));
            updatedJobDetails.setModifiedDate(getDate());
            return new ResponseEntity<>(jobRepository.save(updatedJobDetails),HttpStatus.OK);
        }else{
            return new ResponseEntity<>(new ResourceNotFoundException("Job does not exist with id:"+id).getMessage(),HttpStatus.NOT_FOUND);
        }
    }
    public LocalDateTime getDate(){
        //DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        return now;
    }


}

