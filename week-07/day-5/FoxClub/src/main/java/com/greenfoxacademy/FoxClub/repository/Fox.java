package com.greenfoxacademy.FoxClub.repository;

import java.util.ArrayList;

public class Fox {
  private String name;
  private ArrayList<String> listOfTricks;
  private String food;
  private String drink;

  public Fox(String name) {
    this.name = name;
    this.listOfTricks = new ArrayList<String>();
  }

  public String getName() {
    return name;
  }

  public void setFood(String food) {
    this.food = food;
  }

  public void setDrink(String drink) {
    this.drink = drink;
  }

  public ArrayList<String> getListOfTricks() {
    return listOfTricks;
  }

  public String getFood() {
    return food;
  }

  public String getDrink() {
    return drink;
  }

  public void addTrick(String trick) {
    listOfTricks.add(trick);
  }
}
