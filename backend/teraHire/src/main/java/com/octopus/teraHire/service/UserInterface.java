package com.octopus.teraHire.service;

import com.octopus.teraHire.model.User;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

public interface UserInterface {
    ResponseEntity<User> addNewUser(User user);
    ResponseEntity<User> updateNewUser(long id, User userDetails);
    ResponseEntity deleteUserById(long id);
    List<User> getUserList();

    ResponseEntity<User> getUserById(long id);

}
