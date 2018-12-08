package com.greenfoxacademy.webshop.webshop.controllers;

import com.greenfoxacademy.webshop.webshop.Products.ShopItem;
import com.greenfoxacademy.webshop.webshop.Products.ShopItemRepository;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.stream.Collectors;

@Controller
public class StockController {


    @RequestMapping(value="/")
    public String showItems(Model model) {
        model.addAttribute("items", ShopItemRepository.getInstance().getProducts());
        return "index";
    }

    @RequestMapping(value="/available")
    public String showOnlyAvailable(Model model) {

        model.addAttribute("items", ShopItemRepository.getInstance().getProducts()
        .stream()
        .filter(item -> item.getQuantityOfStock() > 0)
        .collect(Collectors.toList()));
        return "index";
    }

    @RequestMapping(value="/contains-nike")
    public String showContainsNike(Model model) {

        model.addAttribute("items", ShopItemRepository.getInstance().getProducts()
                .stream()
                .filter(item -> item.getDescription().contains("nike") || item.getName().contains("nike"))
                .collect(Collectors.toList()));
        return "index";
    }


    @RequestMapping(value="/cheapest")
    public String showCheapestFirst(Model model) {

        model.addAttribute("items", ShopItemRepository.getInstance().getProducts()
                .stream()
                .sorted(Comparator.comparing(ShopItem::getPrice))
                .collect(Collectors.toList()));
        return "index";
    }

    @RequestMapping(value="/most-expensive")
    public String showMostExpensive(Model model) {

        ArrayList<ShopItem> mostExpensive = new ArrayList<>();

        for(ShopItem item : ShopItemRepository.getInstance().getProducts()) {
            if (mostExpensive.size() == 0) {
                mostExpensive.add(item);
            }
            else if (mostExpensive.get(0).getPrice() < item.getPrice()) {
                mostExpensive.set(0, item);
            }

        }

        model.addAttribute("items", mostExpensive);
        return "index";
    }

    @RequestMapping(value="/avg-stock")
    public String showAvgStock(Model model) {
        double avgStock = 0;

        for(ShopItem item : ShopItemRepository.getInstance().getProducts()) {
            avgStock += item.getQuantityOfStock();
        }
        avgStock = avgStock / ShopItemRepository.getInstance().getProducts().size();

        model.addAttribute("avg", avgStock);
        return "avg-stock";
    }

    @PostMapping(
            value="/search",
            consumes= MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public String showSearchResult(Model model, @RequestBody MultiValueMap<String, String> formData) {

        String searchValue = formData.toSingleValueMap().get("search").toLowerCase();

        model.addAttribute("items", ShopItemRepository.getInstance().getProducts()
                .stream()
                .filter(item -> item.getDescription().toLowerCase().contains(searchValue) || item.getName().contains(searchValue))
                .collect(Collectors.toList()));
        return "index";
    }


}
