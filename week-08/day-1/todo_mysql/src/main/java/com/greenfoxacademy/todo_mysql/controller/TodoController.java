package com.greenfoxacademy.todo_mysql.controller;

import com.greenfoxacademy.todo_mysql.repository.Todo;
import com.greenfoxacademy.todo_mysql.service.TodoService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

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

  @GetMapping("/add")
  public String addTodoForm(Model model) {
    model.addAttribute("todo", new Todo());
    return "add";
  }

  @PostMapping("/add")
  public String addTodo(@ModelAttribute Todo todo) {
    System.out.println(todo.getTitle());
      todos.addTodo(todo);
    return "redirect:/todo/list";
  }
}
