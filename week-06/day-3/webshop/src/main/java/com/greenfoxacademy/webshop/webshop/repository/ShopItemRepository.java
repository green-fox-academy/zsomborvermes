package com.greenfoxacademy.webshop.webshop.repository;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;

@Repository
public class ShopItemRepository {

  private ArrayList<ShopItem> shopItemList;

  private ShopItemRepository() {
    this.shopItemList = new ArrayList();
    this.shopItemList.add(new ShopItem("Nike Air Force 1", "nice shoes", 300, 0));
    this.shopItemList.add(new ShopItem("Samsung TV", "LED TV", 7012, 4));
    this.shopItemList.add(new ShopItem("iPhone Xs", "Expensive smartphone", 8221, 21));
    this.shopItemList.add(new ShopItem("Macbook Pro 15", "Expensive laptop", 15012, 12));
  }

  public ArrayList<ShopItem> getShopItemList() {
    return this.shopItemList;
  }
}
