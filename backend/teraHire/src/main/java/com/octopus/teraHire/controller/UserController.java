package com.octopus.teraHire.controller;


import com.octopus.teraHire.model.User;
import com.octopus.teraHire.repository.UserRepository;
import com.octopus.teraHire.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserController {


    private UserService userService;
    public UserController(UserService userService){
        this.userService = userService;
    }
    @GetMapping(value = "/Welcome")

    public String getPage(){
        return "Welcome Page-Testing Endpoints in API [Not Secure Request] ";
    }
    @GetMapping(value = "auth/list")
    public List<User> getallUsers(){
        return userService.getUsersList();
    }
    @PostMapping("/new")
    public ResponseEntity<User> addNewUser(@RequestBody @Valid User user){
        return userService.addNewUser(user);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<User> updateNewUser(@PathVariable long id, @RequestBody User userDetails){
        return userService.updateNewUser(id,userDetails);
    }
    @DeleteMapping (value="delete/{id}")
    public ResponseEntity  deleteUser(@PathVariable long id){
        return userService.deleteUserById(id);
    }

}
