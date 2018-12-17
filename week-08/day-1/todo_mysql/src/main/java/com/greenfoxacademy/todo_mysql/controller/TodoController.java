package com.greenfoxacademy.todo_mysql.controller;

import com.greenfoxacademy.todo_mysql.service.TodoService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/todo")
public class TodoController {

  private TodoService todos;

  public TodoController(TodoService todos) {
    this.todos = todos;
  }

  @GetMapping({"/", "/list"})
  public String list(@RequestParam(value = "isActive", required = false) boolean isActive, Model model) {
    if (isActive) {
      model.addAttribute("todos", todos.getActive());
    } else {
      model.addAttribute("todos", todos.getAll());
    }
    return "todolist";
  }
}
