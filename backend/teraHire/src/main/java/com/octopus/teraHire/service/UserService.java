package com.octopus.teraHire.service;

import com.octopus.teraHire.exception.ResourceNotFoundException;
import com.octopus.teraHire.exception.UserExistsException;
import com.octopus.teraHire.exception.UserNotFound;
import com.octopus.teraHire.model.AuthUser;
import com.octopus.teraHire.model.User;
import com.octopus.teraHire.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;


@Service
public class UserService implements UserInterface{



    private UserRepository userRepository;
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;

    }

    public boolean isUserEmailExists(String emailId){
        return userRepository.existsByEmail(emailId);
    }

    public LocalDateTime getDate(){
        //DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        return now;
    }
    @Override
    public ResponseEntity addNewUser(User user) {

        if(!isUserEmailExists(user.getEmail())){
            user.setCreatedDate(getDate());
            user.setModifiedDate(getDate());
            return new ResponseEntity<User>(userRepository.save(user), HttpStatus.OK);
//
//            }else{
//                return new ResponseEntity<>(new UserExistsException("Error occurred").getLocalizedMessage(), HttpStatus.FOUND);
//            }
        }else{
            //throw new UserExistsException("User already exists");
            return new ResponseEntity<>(new UserExistsException("This email already in use.").getLocalizedMessage(),HttpStatus.FOUND);
        }
    }


    @Override
    public ResponseEntity updateNewUser(long id, User userDetails){
        User updateNewUser = userRepository.getReferenceById(id);
        if(userRepository.existsById(id)){
            updateNewUser.setFirstName((userDetails.getFirstName()));
            updateNewUser.setLastName((userDetails.getLastName()));
            updateNewUser.setPhoneNumber((userDetails.getPhoneNumber()));
            updateNewUser.setModifiedDate(getDate());

            return new ResponseEntity<>(userRepository.save(updateNewUser),HttpStatus.OK);
        }else{
            return new ResponseEntity<>(new ResourceNotFoundException("user not exist with id:" + id).getMessage(),HttpStatus.NOT_FOUND);
        }



    }
    @Override
    public void deleteUserById(long id){
        userRepository.deleteById(id);
    }

    @Override
    public List<User> getUserList(){
        return userRepository.findAll();
    }





}
