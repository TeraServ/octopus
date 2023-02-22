package com.octopus.teraHire.service;


import com.octopus.teraHire.exception.ResourceNotFoundException;
import com.octopus.teraHire.model.Event;
import com.octopus.teraHire.repository.CandidateRepository;
import com.octopus.teraHire.repository.EventRepository;
import com.octopus.teraHire.repository.JobRepository;
import com.octopus.teraHire.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class EventService implements EventInterface{
     private EventRepository eventRepository;
    private JobRepository jobRepository;
    private CandidateRepository candidateRepository;
    private final UserRepository userRepository;


    public EventService(EventRepository eventRepository, JobRepository jobRepository, CandidateRepository candidateRepository,
                        UserRepository userRepository) {
        this.eventRepository = eventRepository;
        this.jobRepository = jobRepository;
        this.candidateRepository = candidateRepository;
        this.userRepository = userRepository;
    }
    /*public boolean isEventExists(long id){
        return eventRepository.isEventExists(id);
    }*/
  @Override
  @Transactional
    public ResponseEntity createEvent(Event event){
        Event newEvent = new Event();
        if(eventRepository.existsById(event.getId())){
            return new ResponseEntity<>("Event Already Exist",HttpStatus.FOUND);
        }
        else {
           newEvent.setStart(event.getStart());
            newEvent.setEnd(event.getEnd());
            newEvent.setCreated(getDate());
            newEvent.setModified(getDate());
            newEvent.setType(event.getType());
            newEvent.setOrganizer_id(event.getOrganizer_id());
            newEvent.setJob(event.getJob());
            newEvent.setTeam_members(event.getTeam_members());
            newEvent.setCandidate(event.getCandidate());
            return new ResponseEntity<Event>(eventRepository.save(newEvent),HttpStatus.OK);
        }
  }
  @Override
  public ResponseEntity updateEvent(long id, Event eventDetails){
      Event updateEvent = eventRepository.getReferenceById(id);
      if(eventRepository.existsById(eventDetails.getId())){
          updateEvent.setStart(eventDetails.getStart());
          updateEvent.setEnd(eventDetails.getEnd());
          updateEvent.setType(eventDetails.getType());
          updateEvent.setJob(eventDetails.getJob());
          updateEvent.setTeam_members(eventDetails.getTeam_members());
          updateEvent.setCandidate(eventDetails.getCandidate());
          updateEvent.setModified(getDate());
          return new ResponseEntity<>(eventRepository.save(updateEvent),HttpStatus.OK);
      }
      else{return new ResponseEntity<>(new ResourceNotFoundException("Event Does not exist"+updateEvent.getId()).getMessage(),HttpStatus.NOT_FOUND);}
  }
  @Override
  public ResponseEntity deleteEvent(long id) {
      if (eventRepository.existsById(id)) {
          Event event = eventRepository.getReferenceById(id);
          eventRepository.delete(event);
          return new ResponseEntity<>(HttpStatus.OK);
      } else {
          return new ResponseEntity<>(new ResourceNotFoundException("Event Does not exist" + id).getMessage(), HttpStatus.NOT_FOUND);
      }
  }
  @Override
  public List<Event> getEventList(){
      return eventRepository.findAll();
    }

    @Override
    public Event getEventById(long id) {
        return eventRepository.getReferenceById(id);
    }

    public LocalDateTime getDate(){
        //DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        return now;
    }



}
