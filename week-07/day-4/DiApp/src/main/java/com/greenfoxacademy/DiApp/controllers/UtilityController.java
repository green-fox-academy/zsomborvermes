package com.greenfoxacademy.DiApp.controllers;

import com.greenfoxacademy.DiApp.services.UtilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class UtilityController {

    @Autowired
    private UtilityService utilities;


    @RequestMapping(path = "/useful", method = RequestMethod.GET)
    public String showUtilities() {
        return "useful";
    }

    @RequestMapping(path = "/useful/colored", method = RequestMethod.GET)
    public String showColored(Model model) {
        model.addAttribute("color", utilities.randomColor());
        return "colored";
    }

}
