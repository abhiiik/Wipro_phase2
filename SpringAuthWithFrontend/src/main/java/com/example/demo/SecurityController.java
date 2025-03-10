package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/rest")
public class SecurityController {
	
	@GetMapping("/public")
	public String publicEndPoint() {
		return "this is public end point";
	}
	
	@GetMapping("/admin")
	public String adminEndPoint() {
		return "this is admin end point";
	}
	
	@GetMapping("/user")
	public String userEndPoint() {
		return "this is user end point";
	}

}
