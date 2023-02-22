package com.octopus.teraHire.service;

import com.octopus.teraHire.model.Event;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface EventInterface {
    public ResponseEntity createEvent(Event event);

    abstract ResponseEntity updateEvent(long id, Event eventdetails);
    List<Event> getEventList();

    public ResponseEntity deleteEvent(long id);

    public Event getEventById(long id);
}
