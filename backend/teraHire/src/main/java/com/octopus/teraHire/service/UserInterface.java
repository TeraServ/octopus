package com.octopus.teraHire.service;

import com.octopus.teraHire.model.User;
import org.springframework.http.ResponseEntity;

public interface UserInterface {
    User addNewUser(User user);
    ResponseEntity<User> updateNewUser(long id, User userDetails);
    void deleteUserById(long id);
}
