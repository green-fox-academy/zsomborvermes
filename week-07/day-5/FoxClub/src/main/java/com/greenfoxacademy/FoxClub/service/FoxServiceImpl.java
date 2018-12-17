package com.greenfoxacademy.FoxClub.service;

import com.greenfoxacademy.FoxClub.repository.Fox;
import com.greenfoxacademy.FoxClub.repository.FoxRepsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;

@Service
public class FoxServiceImpl implements FoxService {
  private FoxRepsitory repository;

  @Autowired
  public FoxServiceImpl(FoxRepsitory repository) {
    this.repository = repository;
  }

  @Override
  public void addFox(Fox fox) {
    repository.addFox(fox);
  }

  @Override
  public Fox getFoxByName(String name) {

    return repository.getFoxes().stream().filter(fox -> fox.getName().equals(name)).collect(Collectors.toList()).get(0);
  }

  @Override
  public boolean alreadyExists(Fox fox) {
    return repository.getFoxes().contains(fox);

  }
}
