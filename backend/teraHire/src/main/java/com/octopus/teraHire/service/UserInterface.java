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

    Optional<User> getUserById(long id);

    ResponseEntity getUserByEmail(String email);

    ResponseEntity authUser(String username,String password);
    User getByUserEmail(String Email);

    public void updatePassword(User user, String newPassword);

    void addToken(User user, String token);
}
