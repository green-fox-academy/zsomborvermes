package com.greenfoxacademy.webshop.webshop.repository;

public class ShopItem {
  private String name;
  private String description;
  private int price;
  private int quantity;

  public ShopItem(String name, String description, int price, int quantity) {
    this.name = name;
    this.description = description;
    this.quantity = quantity;
    this.price = price;
  }

  public String getName() {
    return name;
  }

  public String getDescription() {
    return description;
  }

  public int getPrice() {
    return price;
  }

  public int getQuantity() {
    return quantity;
  }
}
