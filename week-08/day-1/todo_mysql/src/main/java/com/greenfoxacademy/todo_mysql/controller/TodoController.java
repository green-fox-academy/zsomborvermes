package com.greenfoxacademy.todo_mysql.controller;

import com.greenfoxacademy.todo_mysql.model.Assignee;
import com.greenfoxacademy.todo_mysql.model.Todo;
import com.greenfoxacademy.todo_mysql.service.AssigneeService;
import com.greenfoxacademy.todo_mysql.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class TodoController {

  private TodoService todos;
  private AssigneeService assignees;

  @Autowired
  public TodoController(TodoService todos, AssigneeService assignees) {
    this.todos = todos;
    this.assignees = assignees;
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

  @PostMapping({"/list"})
  public String listSearchResult(@RequestParam String search, Model model) {
    model.addAttribute("todos", todos.searchResult(search));
    return "todolist";
  }

  @GetMapping("/add")
  public String addTodoForm(Model model) {
    model.addAttribute("todo", new Todo());
    return "add";
  }

  @PostMapping("/add")
  public String addTodo(@ModelAttribute Todo todo) {
    todos.addTodo(todo);
    return "redirect:/list";
  }

  @GetMapping("/{id}/delete")
  public String deleteTodo(@PathVariable long id) {
    todos.deleteTodo(id);
    return "redirect:/list";
  }

  @GetMapping("/{id}/edit")
  public String editTodoForm(@PathVariable long id, Model model) {
    model.addAttribute("todo", todos.getTodoById(id));
    model.addAttribute("assignees", assignees.getAll());
    return "edit";
  }

  @PostMapping("/{id}/edit")
  public String editTodo(@PathVariable long id, @ModelAttribute Todo todo) {
    Todo originalTodo = todos.getTodoById(id);
    originalTodo.setTitle(todo.getTitle());
    originalTodo.setUrgent(todo.isUrgent());
    originalTodo.setDone(todo.isDone());
    originalTodo.setAssignee(todo.getAssignee());
    originalTodo.setDueDate(todo.getDueDate());
    todos.addTodo(originalTodo);
    return "redirect:/list";
  }

  @GetMapping("/create-assignee")
  public String createForm(Model model) {
    model.addAttribute("assignee", new Assignee());
    return "create-assignee";
  }

  @PostMapping("/create-assignee")
  public String create(@ModelAttribute Assignee assignee) {
    assignees.addAssignee(assignee);
    return "redirect:/assigneelist";
  }

  @GetMapping("/assigneelist")
  public String assigneeList(Model model) {
    model.addAttribute("assignees", assignees.getAll());
    return "assigneelist";
  }

  @GetMapping("/{id}/delete-assignee")
  public String deleteAssignee(@PathVariable long id) {
    assignees.deleteAssignee(id);
    return "redirect:/assigneelist";
  }

  @GetMapping("/{id}/todolist-of-assignee")
  public String todoListOfAssignee(@PathVariable long id, Model model) {
    model.addAttribute("assignee", assignees.getAssigneeById(id));
    model.addAttribute("todos", assignees.getAssigneeById(id).getTodos());
    return "todolist-of-assignee";
  }

}
