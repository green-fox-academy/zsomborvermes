package com.greenfoxacademy.webshop.webshop.service;

import com.greenfoxacademy.webshop.webshop.repository.ShopItem;

import java.util.ArrayList;

public interface StockService {

  ArrayList<ShopItem> getAllShopItems();

  ArrayList<ShopItem> getAllAvailable();

  ArrayList<ShopItem> getSearchResult(String searchValue);

  ArrayList<ShopItem> getSortedByPriceAsc();

  ArrayList<ShopItem> getMostExpensive();

  double getAvgStock();
}
