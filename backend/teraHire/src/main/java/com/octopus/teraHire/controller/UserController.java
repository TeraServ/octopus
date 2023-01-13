package com.octopus.teraHire.controller;


import com.octopus.teraHire.exception.ResourceNotFoundException;
import com.octopus.teraHire.model.User;
import com.octopus.teraHire.repository.UserRepository;
import com.octopus.teraHire.service.UserService;
import org.springframework.http.ResponseEntity;
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

    @PutMapping("/updateNewUser/{id}")
    public ResponseEntity<User> updateNewUser(@PathVariable long id,@RequestBody User userDetails){
        return userService.updateNewUser(id,userDetails);
    }

    @DeleteMapping (value="deleteUser/{id}")
    public String deleteUser(@PathVariable long id){
        userService.deleteUserById(id);
        return "Deleted user with id:"+ id;
    }

}


