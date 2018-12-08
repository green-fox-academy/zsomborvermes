package com.greenfoxacademy.webshop.webshop.Products;

import java.util.ArrayList;

public class ShopItemRepository {
    private static ShopItemRepository instance;
    private ArrayList<ShopItem> shopItemList;

    private ShopItemRepository() {
        this.shopItemList = new ArrayList();
        this.shopItemList.add(new ShopItem("nike", "Cuclee", 300, 0));
        this.shopItemList.add(new ShopItem("item2", "TV", 7012, 4));
        this.shopItemList.add(new ShopItem("item3", "Penlaty nike", 221, 21));
        this.shopItemList.add(new ShopItem("item4", "Tiptop cipellő", 5012, 12));
        this.shopItemList.add(new ShopItem("alma", "egy szep alma", 250, 35));
        this.shopItemList.add(new ShopItem("kiskutya", "cuki kiskutya", 701, 4));
        this.shopItemList.add(new ShopItem("nem tudom", "fogalmam sincs", 2212, 21));
        this.shopItemList.add(new ShopItem("cilke", "baromifi", 501, 12));
    }

    public static ShopItemRepository getInstance() {
        if(ShopItemRepository.instance == null) {
            ShopItemRepository.instance = new ShopItemRepository();
        }
        return ShopItemRepository.instance;
    }

    public ArrayList<ShopItem> getProducts() {
        return this.shopItemList;
    }
}
