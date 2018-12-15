package com.greenfoxacademy.webshop.webshop.service;

import com.greenfoxacademy.webshop.webshop.repository.ShopItem;
import com.greenfoxacademy.webshop.webshop.repository.ShopItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.stream.Collectors;

@Service
public class StockServiceImpl implements StockService {
  private ShopItemRepository repository;

  @Autowired
  public StockServiceImpl(ShopItemRepository repository) {
    this.repository = repository;
  }

  @Override
  public ArrayList<ShopItem> getAllShopItems() {
    return repository.getShopItemList();
  }

  @Override
  public ArrayList<ShopItem> getAllAvailable() {
    return (ArrayList<ShopItem>) getAllShopItems().stream()
            .filter(item -> item.getQuantity() > 0)
            .collect(Collectors.toList());
  }

  @Override
  public ArrayList<ShopItem> getSearchResult(String searchValue) {
    return (ArrayList<ShopItem>) getAllShopItems().stream()
            .filter(item -> item.getDescription().toLowerCase().contains(searchValue)
                    || item.getName().toLowerCase().contains(searchValue))
            .collect(Collectors.toList());
  }

  @Override
  public ArrayList<ShopItem> getSortedByPriceAsc() {
    return (ArrayList<ShopItem>) getAllShopItems().stream()
            .sorted(Comparator.comparing(ShopItem::getPrice))
            .collect(Collectors.toList());
  }

  @Override
  public ArrayList<ShopItem> getMostExpensive() {

    ArrayList<ShopItem> mostExpensive = new ArrayList<>();

    for (ShopItem item : getAllShopItems()) {
      if (mostExpensive.size() == 0) {
        mostExpensive.add(item);
      } else if (mostExpensive.get(0).getPrice() < item.getPrice()) {
        mostExpensive.set(0, item);
      }
    }

    return mostExpensive;
  }

  @Override
  public double getAvgStock() {
    double avgStock = 0;

    for (ShopItem item : getAllShopItems()) {
      avgStock += item.getQuantity();
    }
    avgStock = avgStock / getAllShopItems().size();

    return avgStock;
  }
}
