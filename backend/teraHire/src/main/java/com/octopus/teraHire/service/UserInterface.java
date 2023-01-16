package com.octopus.teraHire.service;

import com.octopus.teraHire.model.User;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface UserInterface {
    List<User> getUsersList();
    User addNewUser(User user);
    void deleteUserById(long id);
    ResponseEntity<User> updateNewUser(long id, User userDetails);

}
