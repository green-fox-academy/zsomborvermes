package com.greenfoxacademy.exampleexam.controller;

import com.greenfoxacademy.exampleexam.model.Alias;
import com.greenfoxacademy.exampleexam.service.AliasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class MainController {

  @Autowired
  private AliasService service;

  @GetMapping("/")
  public String mainPage(Model model) {
    if(model.asMap().get("kutya") != null) {
      model.addAttribute("alma", model.asMap().get("kutya"));
    } else {
      model.addAttribute("alma", new Alias());
    }

    return "main";
  }

  @GetMapping("/a/{alias}")
  public String incrementHitCount(@PathVariable String alias) {
    if(service.findByAliasName(alias) != null) {
      service.findByAliasName(alias).incrementHitCount();
    }
    return "redirect:/";
  }

  @PostMapping("/save-link")
  public String saveLink(@ModelAttribute Alias alma, RedirectAttributes redirectAttrs) {
    if(service.findByAliasName(alma.getAname()) == null) {
      service.addAlias(alma);
      redirectAttrs.addFlashAttribute("message", "Your URL is aliased to "+ alma.getAname() +" and your secret code is "+ alma.getSecretCode() +".");
    } else {
      redirectAttrs.addFlashAttribute("message", "Your alias is already in use!");
      redirectAttrs.addFlashAttribute("kutya", alma);
    }
    return "redirect:/";
  }
}
