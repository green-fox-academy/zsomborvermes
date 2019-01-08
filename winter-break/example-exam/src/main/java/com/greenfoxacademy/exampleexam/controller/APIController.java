package com.greenfoxacademy.exampleexam.controller;

import com.greenfoxacademy.exampleexam.model.Alias;
import com.greenfoxacademy.exampleexam.service.AliasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api")
public class APIController {

  @Autowired
  private AliasService service;

  @GetMapping("/links")
  public List<Alias> links() {
    return service.getAll();
  }

  @DeleteMapping("/links/{id}")
  public ResponseEntity delete(@PathVariable long id, @RequestBody HashMap<String, String> secretObject) {
    if (service.getById(id) == null) {
      return new ResponseEntity(HttpStatus.NOT_FOUND);
    } else if (service.getById(id) != null && service.getById(id).getSecretCode().equals(secretObject.get("secretCode"))) {
      service.deleteById(id);
      return new ResponseEntity(HttpStatus.NO_CONTENT);
    } else {
      return new ResponseEntity(HttpStatus.FORBIDDEN);
    }
  }
}
