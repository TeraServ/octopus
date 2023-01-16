package com.octopus.teraHire.controller;


import com.octopus.teraHire.model.User;
import com.octopus.teraHire.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/user")
public class UserController {


    private UserService userService;
    public UserController(UserService userService){
        this.userService = userService;
    }
    @PostMapping("/new")
    public ResponseEntity<User> addNewUser(@RequestBody @Valid User user){
        return userService.addNewUser(user);
    }

}
