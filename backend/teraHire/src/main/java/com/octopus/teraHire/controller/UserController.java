package com.octopus.teraHire.controller;


import com.octopus.teraHire.model.AuthUser;
import com.octopus.teraHire.model.User;
import com.octopus.teraHire.service.UserDetailsServiceImpl;
import com.octopus.teraHire.service.UserService;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/user")
@SecurityRequirement(name = "user-authenticate")
public class UserController {


    private UserService userService;
    private UserDetailsServiceImpl userDetailsService;
   // private AuthenticationManager authenticationManager;

    public UserController(UserService userService,UserDetailsServiceImpl userDetailsService){
        this.userService = userService;
        this.userDetailsService = userDetailsService;
    }
    @PostMapping("/new")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<User> addNewUser(@RequestBody @Valid User user){
        return userService.addNewUser(user);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<User> updateNewUser(@PathVariable long id,@RequestBody User userDetails){
        return userService.updateNewUser(id,userDetails);
    }

    @GetMapping(value = "/users")
    @PreAuthorize("hasRole('ROLE_USER')")
    public List<User> getUserList(){

        return userService.getUserList();

    }

    @DeleteMapping (value="delete/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public String deleteUser(@PathVariable long id){
        userService.deleteUserById(id);
        return "Deleted user with id:"+ id;
    }




}
