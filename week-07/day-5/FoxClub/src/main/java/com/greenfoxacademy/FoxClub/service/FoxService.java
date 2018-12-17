package com.greenfoxacademy.FoxClub.service;

import com.greenfoxacademy.FoxClub.repository.Fox;

public interface FoxService {

  void addFox(Fox fox);

  Fox getFoxByName(String name);

  boolean alreadyExists(Fox fox);

}
