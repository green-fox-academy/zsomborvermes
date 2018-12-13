package com.greenfoxacademy.bankOfSimba;

import java.text.DecimalFormat;

public class BankAccount {
    private String name;
    private double balance;
    private String animalType;
    private boolean isKing;
    private boolean isBadGuy;

    public BankAccount(String name, double balance, String animalType, boolean isKing, boolean isBadGuy) {
        this.name = name;
        this.balance = balance;
        this.animalType = animalType;
        this.isKing = isKing;
        this.isBadGuy = isBadGuy;
    }

    public boolean getIsBadGuy() {
        return isBadGuy;
    }

    public String getName() {
        return name;
    }

    public String getBalance() {
        DecimalFormat df = new DecimalFormat("0.00 Zebra");
        return df.format(balance);
    }

    public boolean getIsKing() {
        return isKing;
    }

    public String getAnimalType() {
        return animalType;
    }
}
