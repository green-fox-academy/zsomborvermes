package com.greenfoxacademy.restpractice.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
public class DoublingController {

  @GetMapping("/doubling")
  public HashMap<?, ?> doubling(@RequestParam(required = false) Integer input) {
    try {
      HashMap<String, Integer> response = new HashMap<>();
      response.put("received", input);
      response.put("result", input + input);
      return response;
    } catch (Exception e) {
      HashMap<String, String> response = new HashMap<>();
      response.put("error", "Please provide an input!");
      return response;
    }
  }

  @GetMapping("/greeter")
  public HashMap<?, ?> greeter(@RequestParam(required = false) String name, String title) {
    HashMap<String, String> response = new HashMap<>();
    if (title == null && name == null) {
      response.put("error", "Please provide a name and a title!");
      return response;
    }
    if (name == null) {
      response.put("error", "Please provide a name!");
      return response;
    }
    if (title == null) {
      response.put("error", "Please provide a title!");
      return response;
    }
    response.put("welcome_message", "Oh, hi there " + name + ", my dear " + title + "!");
    return response;


  }
}
