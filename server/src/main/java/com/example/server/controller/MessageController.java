package com.example.server.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

/**
 * author: Madhu B
 */
@RestController
public class MessageController {

    @GetMapping("/api/message")
    public Map<String, String> message() {
        return Map.of("message", "Hello from Springboot server");
    }
}