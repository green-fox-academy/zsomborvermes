package com.greenfoxacademy.todo_mysql.service;

import com.greenfoxacademy.todo_mysql.repository.Todo;
import com.greenfoxacademy.todo_mysql.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.stream.Collectors;

@Service
public class TodoService {

  private TodoRepository repository;

  @Autowired
  public TodoService(TodoRepository repository) {
    this.repository = repository;
  }

  public ArrayList<Todo> getAll() {
    return (ArrayList<Todo>) repository.findAll();
  }

  public ArrayList<Todo> getActive() {
     ArrayList<Todo> todos = (ArrayList<Todo>) repository.findAll();
     return (ArrayList<Todo>) todos.stream().filter(todo -> !todo.isDone()).collect(Collectors.toList());
  }
}
