package com.octopus.teraHire.service;

import com.octopus.teraHire.model.User;
import org.springframework.http.ResponseEntity;

public interface UserInterface {

    ResponseEntity<User> addNewUser(User user);
}
