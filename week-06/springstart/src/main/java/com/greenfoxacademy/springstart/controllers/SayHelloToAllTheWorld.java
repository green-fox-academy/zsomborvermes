package com.greenfoxacademy.springstart.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class SayHelloToAllTheWorld {
    private String[] hellos = {"Mirëdita", "Ahalan", "Parev", "Zdravei", "Nei Ho", "Dobrý den", "Ahoj", "Goddag", "Goede dag, Hallo", "Hello", "Saluton", "Hei", "Bonjour",
            "Guten Tag", "Gia'sou", "Aloha", "Shalom", "Namaste", "Namaste", "Jó napot", "Halló", "Helló", "Góðan daginn", "Halo", "Aksunai", "Qanuipit", "Dia dhuit",
            "Salve", "Ciao", "Kon-nichiwa", "An-nyong Ha-se-yo", "Salvëte", "Ni hao", "Dzien' dobry", "Olá", "Bunã ziua", "Zdravstvuyte", "Hola", "Jambo", "Hujambo", "Hej",
            "Sa-wat-dee", "Merhaba", "Selam", "Vitayu", "Xin chào", "Hylo", "Sut Mae", "Sholem Aleychem", "Sawubona"};

    @RequestMapping(value="/web/hellos")
    public String hello(Model model) {
        int randomHello = (int) (Math.random() * this.hellos.length);
        String randomColor = "rgb("+ (int)(Math.random() * 255) +","+(int)(Math.random() * 255) +","+(int)(Math.random() * 255)+")";
        int randomSize = (int) (Math.random() * 20) + 20;

        model.addAttribute("hellos", this.hellos[randomHello]);
        model.addAttribute("size", randomSize);
        model.addAttribute("color", randomColor);
        return "hellos";
    }
}
