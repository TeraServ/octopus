package com.octopus.teraHire.controller;


import com.octopus.teraHire.model.User;
import com.octopus.teraHire.repository.UserRepository;
import com.octopus.teraHire.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {


    private UserService userService;
    private final UserRepository userRepository;

    public UserController(UserService userService,
                          UserRepository userRepository){
        this.userService = userService;
        this.userRepository = userRepository;
    }
    @GetMapping(value = "/")
    public String getPage(){
        return "Welcome Page";
    }
    @GetMapping(value = "/users")
    public List<User>getUser(){
        return userRepository.findAll();
    }
    @PostMapping("/addNewUser")
    public User addNewUser(@RequestBody User user){
        return userService.addNewUser(user);
    }
    @DeleteMapping (value="deleteUser/{id}")
    public String deleteUser(@PathVariable long id){
        userService.deleteUserById(id);
        return "Deleted user with id:"+ id;
    }

}
