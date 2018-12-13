package com.greenfoxacademy.DiApp.services;

import org.springframework.beans.factory.annotation.Autowired;


public class RedColor implements MyColor {

    @Autowired
    private Printer printer;

    @Override
    public void printColor() {
        printer.log("It is red in color...");
    }
}
