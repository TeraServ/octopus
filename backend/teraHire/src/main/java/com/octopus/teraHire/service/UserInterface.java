package com.octopus.teraHire.service;

import com.octopus.teraHire.model.User;

public interface UserInterface {

    User addNewUser(User user);
    void deleteUserById(long id);
}
