package com.cleanworld.clean.controller;

import com.cleanworld.clean.services.LoginService;
import org.apache.catalina.User;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class LoginController {

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        Login loginService = new Login();
        boolean isValidUser = loginService.validateUser(user.getUsername(), user.getPassword());
        return isValidUser ? "Login exitoso" : "Credenciales incorrectas";
    }
}
