package com.greenfoxacademy.springstart.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.concurrent.atomic.AtomicLong;

@Controller
public class HelloWebController {
    private AtomicLong counter = new AtomicLong(1);

    @RequestMapping(value="/web/greeting")
    public String greeting(@RequestParam(value="name", required=true) String name, Model model) {
        model.addAttribute("greeting", new Greeting(counter.getAndAdd(1), name));
        return "greeting";
    }
}
