package com.greenfoxacademy.bankOfSimba;

import java.text.DecimalFormat;

public class BankAccount {
    private String name;
    private double balance;
    private String animalType;

    public BankAccount(String name, double balance, String animalType) {
        this.name = name;
        this.balance = balance;
        this.animalType = animalType;
    }

    public String getName() {
        return name;
    }

    public String getBalance() {
        DecimalFormat df = new DecimalFormat("0.00 Zebra");
        return df.format(balance);
    }

    public String getAnimalType() {
        return animalType;
    }
}
