package com.greenfoxacademy.restpractice.controller;

import com.greenfoxacademy.restpractice.model.ArrayHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
public class ArrayController {

  @PostMapping("/arrays")
  public HashMap<?, ?> arrayOperations(@RequestBody ArrayHandler arrayHandler) {
    return arrayHandler.doOperation();
  }
}
