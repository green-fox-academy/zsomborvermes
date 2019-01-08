package com.greenfoxacademy.resttesting.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;


@RestController
public class GuardianController {

  @GetMapping("/groot")
  public ResponseEntity<HashMap<?, ?>> groot(@RequestParam(required = false) String message) {
    HashMap<String, String> response = new HashMap<>();
    if(message == null) {
      response.put("error", "I am Groot!");
      return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }
    response.put("received", message);
    response.put("translated", "I am Groot!");
    return new ResponseEntity<>(response, HttpStatus.OK);
  }
}
