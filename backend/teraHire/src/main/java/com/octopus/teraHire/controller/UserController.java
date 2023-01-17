package com.octopus.teraHire.controller;


import com.octopus.teraHire.exception.ResourceNotFoundException;
import com.octopus.teraHire.model.User;
import com.octopus.teraHire.repository.UserRepository;
import com.octopus.teraHire.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

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


    @PutMapping("/updateNewUser/{id}")
    public ResponseEntity<User> updateNewUser(@PathVariable long id,@RequestBody User userDetails){
        return userService.updateNewUser(id,userDetails);
    }

    @GetMapping(value = "/users")
    public List<User> getUserList(){

        return userService.getUserList();

    }

    @DeleteMapping (value="deleteUser/{id}")
    public ResponseEntity<User> deleteUser(@PathVariable long id){
        return userService.deleteUserById(id);

    }

}


