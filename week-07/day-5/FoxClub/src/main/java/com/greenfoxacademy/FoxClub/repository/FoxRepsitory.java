package com.greenfoxacademy.FoxClub.repository;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public class FoxRepsitory {
  private ArrayList<Fox> foxes;

  public FoxRepsitory() {
    foxes = new ArrayList<>();
    Fox vuk = new Fox("Vuk");
    vuk.addTrick("sit");
    vuk.addTrick("sleep");
    vuk.addTrick("eat");
    foxes.add(vuk);
  }

  public ArrayList<Fox> getFoxes() {
    return foxes;
  }

  public void addFox(Fox fox) {
    foxes.add(fox);
  }
}
