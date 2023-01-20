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
import java.util.List;
import java.util.UUID;


@Service
public class JobService implements JobInterface{
    private JobRepository jobRepository;
    private final UserRepository userRepository;

    public boolean isJobValid(UUID uuid){
        return jobRepository.existsById(uuid);
    }
    public JobService(JobRepository jobRepository,
                      UserRepository userRepository) {
        this.jobRepository = jobRepository;
        this.userRepository = userRepository;
    }
    @Override
    public List<Job> getJobList(){
        return jobRepository.findAll();
    }
    @Override
    @Transactional
    public ResponseEntity addNewJob(Job job){

        return new ResponseEntity<Job>(jobRepository.save(job), HttpStatus.OK);
        }
    @Override
    public ResponseEntity deleteJobById(UUID id){
        if(jobRepository.existsById(id)){
            jobRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(new ResourceNotFoundException("Job not found with id:"+id).getMessage(),HttpStatus.NOT_FOUND);
        }
    }
    @Override
    public ResponseEntity updateJob(UUID uuid, Job job){
        Job updatedJobDetails = jobRepository.getReferenceById(uuid);
        if(jobRepository.existsById(uuid)){
            updatedJobDetails.setTitle((job.getTitle()));
            updatedJobDetails.setOwner((job.getOwner()));
            updatedJobDetails.setStage((job.getStage()));
            updatedJobDetails.setStatus((job.getStatus()));
            updatedJobDetails.setActiveCandidates((job.getActiveCandidates()));
            updatedJobDetails.setDroppedCandidates((job.getDroppedCandidates()));
            updatedJobDetails.setTotalNoOfCandidates((job.getTotalNoOfCandidates()));
            updatedJobDetails.setSummary((job.getSummary()));
            updatedJobDetails.setTeamID((job.getTeamID()));
            updatedJobDetails.setScoreCard((job.getScoreCard()));
            return new ResponseEntity<>(jobRepository.save(updatedJobDetails),HttpStatus.OK);
        }else{
            return new ResponseEntity<>(new ResourceNotFoundException("Job does not exist with id:"+uuid).getMessage(),HttpStatus.NOT_FOUND);
        }
    }


}

