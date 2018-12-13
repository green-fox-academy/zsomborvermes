package com.greenfoxacademy.DiApp.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class BlueColor implements MyColor {

    @Autowired
    private Printer printer;

    @Override
    public void printColor() {
        printer.log("It is blue in color...");
    }
}

