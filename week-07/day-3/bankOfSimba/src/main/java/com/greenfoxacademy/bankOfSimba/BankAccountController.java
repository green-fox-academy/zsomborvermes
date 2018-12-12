package com.greenfoxacademy.bankOfSimba;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.ArrayList;
import java.util.List;


@Controller

public class BankAccountController {

    private List<BankAccount> accounts = new ArrayList<>();

    public BankAccountController() {
        accounts.add(new BankAccount("Simba", 200, "lion", true, false));
        accounts.add(new BankAccount("Rafiki", 123.234, "monkey", false, true));
        accounts.add(new BankAccount("Nala", 20.542, "lion", false, false));
        accounts.add(new BankAccount("Pumba", 40.875, "pig", false, true));
        accounts.add(new BankAccount("Timon", 103.5332, "meerkat", false, true));
    }

    @RequestMapping(path = "/show", method = RequestMethod.GET)
    public String show(Model model) {
        BankAccount simba = new BankAccount("Simba", 2000, "lion", true, false);
        model.addAttribute("simba", simba);
        return "show";
    }


    @RequestMapping(path = "/htmlception", method = RequestMethod.GET)
    public String htmlCeption(Model model) {

        model.addAttribute("text", "This is an <em>HTML</em> text. <b>Enjoy yourself!</b>");
        return "htmlception";
    }

    @RequestMapping(path = "/showAll", method = RequestMethod.GET)
    public String showAll(Model model) {
        model.addAttribute("accounts", accounts);
        return "showAll";
    }


}
