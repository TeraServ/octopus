package com.octopus.teraHire.controller;


import com.octopus.teraHire.model.User;
import com.octopus.teraHire.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {


    private UserService userService;
    public UserController(UserService userService){
        this.userService = userService;
    }
    @PostMapping("/addNewUser")
    public User addNewUser(@RequestBody User user){
        return userService.addNewUser(user);
    }

}
