package com.greenfoxacademy.springstart.controllers;

import org.springframework.web.bind.annotation.*;

import java.util.concurrent.atomic.AtomicLong;

@RestController
public class HelloRESTController {
    private AtomicLong counter = new AtomicLong(1);

    @RequestMapping(value="/greeting")

    public Greeting greeting(@RequestParam(value="name", required=true) String name) {
        return new Greeting(counter.getAndAdd(1), name);
    }
}
