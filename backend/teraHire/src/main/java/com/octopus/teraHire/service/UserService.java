package com.octopus.teraHire.service;

import com.octopus.teraHire.model.User;
import com.octopus.teraHire.repository.UserRepository;
import org.springframework.stereotype.Service;


@Service
public class UserService implements UserInterface{



    private UserRepository userRepository;
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }
    @Override
    public User addNewUser(User user) {
        return userRepository.save(user);
    }
    @Override
    public void deleteUserById(long id){
        userRepository.deleteById(id);
    }
}
