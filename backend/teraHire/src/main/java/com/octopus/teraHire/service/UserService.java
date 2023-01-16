package com.octopus.teraHire.service;
import com.octopus.teraHire.exception.ResourceNotFoundException;
import com.octopus.teraHire.model.User;
import com.octopus.teraHire.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserService implements UserInterface{



    private UserRepository userRepository;
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }
    @Override
    public List<User> getUsersList(){
        return userRepository.findAll();
    }
    @Override
    public User addNewUser(User user) {
        return userRepository.save(user);
    }
    @Override
    public void deleteUserById(long id){
        userRepository.deleteById(id);
    }
 @Override
    public ResponseEntity<User> updateNewUser(long id, User userDetails){
        User updateNewUser = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User does not exist with id:" + id));
        updateNewUser.setUsername(userDetails.getUsername());
        updateNewUser.setPassword(userDetails.getPassword());
        updateNewUser.setEmail(userDetails.getEmail());
        updateNewUser.setFirstName((userDetails.getFirstName()));
        updateNewUser.setLastName((userDetails.getLastName()));
        updateNewUser.setPhoneNumber((userDetails.getPhoneNumber()));

        userRepository.save(updateNewUser);
        return ResponseEntity.ok(updateNewUser);
    }
}
