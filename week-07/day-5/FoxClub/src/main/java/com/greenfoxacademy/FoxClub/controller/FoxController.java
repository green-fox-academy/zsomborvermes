package com.greenfoxacademy.FoxClub.controller;

import com.greenfoxacademy.FoxClub.repository.Fox;
import com.greenfoxacademy.FoxClub.service.FoxService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class FoxController {

  private FoxService foxes;

  public FoxController(FoxService foxes) {
    this.foxes = foxes;
  }

  @GetMapping("/")
  public String mainPage(@RequestParam(value = "name", defaultValue = "") String name, Model model) {
    if (name.equals("")) {
      return "redirect:/login";
    }
    model.addAttribute("fox", foxes.getFoxByName(name));
    return "index";
  }

  @GetMapping("/login")
  public String loginPage(@ModelAttribute(name="fox") Fox fox) {
    return "login";
  }

  @PostMapping("/login")
  public String setName(@RequestParam("name") String name, RedirectAttributes redirectAttrs, @ModelAttribute(name="fox") Fox fox) {
    if (foxes.alreadyExists(fox)) {
      redirectAttrs.addAttribute("name", name);
      return "redirect:/";
    }
    foxes.addFox(fox);
    redirectAttrs.addAttribute("name", name);
    return "redirect:/";
  }
}
