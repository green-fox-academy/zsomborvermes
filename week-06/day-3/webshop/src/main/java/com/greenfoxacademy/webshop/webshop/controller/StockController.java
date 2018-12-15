package com.greenfoxacademy.webshop.webshop.controller;

import com.greenfoxacademy.webshop.webshop.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class StockController {

  private StockService stock;

  @Autowired
  public StockController(StockService stock) {
    this.stock = stock;
  }

  @RequestMapping(value = "/")
  public String showItems(Model model) {
    model.addAttribute("items", stock.getAllShopItems());

    return "index";
  }

  @RequestMapping(value = "/available")
  public String showOnlyAvailable(Model model) {
    model.addAttribute("items", stock.getAllAvailable());

    return "index";
  }

  @RequestMapping(value = "/contains-nike")
  public String showContainsNike(Model model) {
    model.addAttribute("items", stock.getSearchResult("nike"));

    return "index";
  }


  @RequestMapping(value = "/cheapest")
  public String showCheapestFirst(Model model) {
    model.addAttribute("items", stock.getSortedByPriceAsc());

    return "index";
  }

  @RequestMapping(value = "/most-expensive")
  public String showMostExpensive(Model model) {
    model.addAttribute("items", stock.getMostExpensive());

    return "index";
  }

  @RequestMapping(value = "/avg-stock")
  public String showAvgStock(Model model) {
    model.addAttribute("avg", stock.getAvgStock());

    return "avg-stock";
  }

  @PostMapping("/search")
  public String showSearchResult(Model model, @RequestParam("search") String searchValue) {

    model.addAttribute("items", stock.getSearchResult(searchValue.toLowerCase()));

    return "index";
  }


}
