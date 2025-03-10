package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DashboardController {

    @GetMapping("/login")
    public String login() {
        return "loginform"; // Looks for loginform.html in templates/
    }

    @GetMapping("/dashboard")
    public String dashboard() {
        return "dashboard"; // You need to create dashboard.html in templates/
    }
}
