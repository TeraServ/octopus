package com.octopus.teraHire.service;
import com.octopus.teraHire.exception.ResourceNotFoundException;
import com.octopus.teraHire.exception.UserExistsException;
import com.octopus.teraHire.model.User;
import com.octopus.teraHire.repository.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import org.springframework.stereotype.Service;
import org.springframework.http.HttpStatus;
import java.time.LocalDateTime;



import java.util.List;


@Service
public class UserService implements UserInterface {
    private UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }
    public boolean isUserEmailExists(String emailId){
        return userRepository.existsByEmail(emailId);
    }
    public boolean isById(Long id){
        return userRepository.existsById(id);
    }
    @Override
    public List<User> getUsersList() {
        return userRepository.findAll();
    }


    @Override
    public ResponseEntity addNewUser(User user) {
        /*PASSWORD HASHING*/
        BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
        String encryptedPwd = bcrypt.encode(user.getPassword());

        user.setPassword(encryptedPwd);
        if (!isUserEmailExists(user.getEmail())) {
            user.setCreatedDate(getDate());
            user.setModifiedDate(getDate());
            if (userRepository.save(user) == user) {
                return new ResponseEntity<User>(user, HttpStatus.OK);

            } else {
                return new ResponseEntity<>(new UserExistsException("Error occurred").getLocalizedMessage(), HttpStatus.FOUND);
            }
        } else {

            return new ResponseEntity<>(new UserExistsException("User already exists").getLocalizedMessage(), HttpStatus.FOUND);
        }
    }

    public LocalDateTime getDate(){
        //DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        return now;
    }

    @Override
    public ResponseEntity deleteUserById(long id) {
        if(userRepository.existsById(id)){
            userRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>(new ResourceNotFoundException("User not exist with id:" + id).getMessage(), HttpStatus.NOT_FOUND);
        }
    }
    @Override
    public ResponseEntity updateNewUser(long id, User userDetails) {
        User updateNewUser = userRepository.getReferenceById(id);
        if (userRepository.existsById(id)) {
            updateNewUser.setFirstName((userDetails.getFirstName()));
            updateNewUser.setLastName((userDetails.getLastName()));
            updateNewUser.setPhoneNumber((userDetails.getPhoneNumber()));
            updateNewUser.setModifiedDate(getDate());
            return new ResponseEntity<>(userRepository.save(updateNewUser), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new ResourceNotFoundException("user not exist with id:" + id).getMessage(), HttpStatus.NOT_FOUND);

        }
    }

}
