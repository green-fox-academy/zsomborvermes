package com.greenfoxacademy.bankOfSimba;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;


@Controller

public class BankAccountController {

    @RequestMapping(path = "/show", method = RequestMethod.GET)
    public String show(Model model) {
        BankAccount simba = new BankAccount("Simba", 2000, "lion");
        model.addAttribute("simba", simba);
        return "show";
    }
}
