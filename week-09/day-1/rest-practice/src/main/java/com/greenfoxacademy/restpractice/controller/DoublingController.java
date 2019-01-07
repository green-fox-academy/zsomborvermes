package com.greenfoxacademy.restpractice.controller;

import org.springframework.web.bind.annotation.*;

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

  @GetMapping("/appenda/{appendable}")
  public HashMap<?, ?> appendA(@PathVariable String appendable) {
    HashMap<String, String> response = new HashMap<>();
    response.put("appended", appendable + "a");
    return response;
  }

  @PostMapping("/dountil/{action}")
  public HashMap<?, ?> doUntil(@PathVariable String action, @RequestBody HashMap<String, Integer> until) {
    if (action.equals("sum")) {
      HashMap<String, Integer> response = new HashMap<>();
      int sum = 0;
      for (int i = 0; i <= until.get("until"); i++) {
        sum += i;
      }
      response.put("result", sum);
      return response;
    }
    if (action.equals("factor")) {
      HashMap<String, Integer> response = new HashMap<>();
      int factor = 1;
      for (int i = 1; i <= until.get("until"); i++) {
        factor *= i;
      }
      response.put("result", factor);
      return response;
    }

    HashMap<String, String> response = new HashMap<>();
    response.put("error", "Please provide a number!");
    return response;
  }

}
