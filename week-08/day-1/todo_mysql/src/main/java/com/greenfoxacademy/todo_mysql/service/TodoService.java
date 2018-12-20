package com.greenfoxacademy.todo_mysql.service;

import com.greenfoxacademy.todo_mysql.model.Assignee;
import com.greenfoxacademy.todo_mysql.model.Todo;
import com.greenfoxacademy.todo_mysql.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class TodoService {

  private TodoRepository repository;

  @Autowired
  public TodoService(TodoRepository repository) {
    this.repository = repository;
  }

  public ArrayList<Todo> getAll() {
    ArrayList<Todo> todos = (ArrayList<Todo>) repository.findAll();
    return (ArrayList<Todo>) todos.stream()
            .sorted(Comparator.comparing(Todo::getId))
            .collect(Collectors.toList());

  }

  public ArrayList<Todo> getActive() {
    ArrayList<Todo> todos = (ArrayList<Todo>) repository.findAll();
    return (ArrayList<Todo>) todos.stream().filter(todo -> !todo.isDone()).collect(Collectors.toList());
  }

  public ArrayList<Todo> searchResult(String searchValue) {
    return repository.findAllByTitleContains(searchValue);
  }

  public void addTodo(Todo todo) {
    repository.save(todo);
  }

  public void deleteTodo(long id) {
    repository.deleteById(id);
  }

  public Todo getTodoById(long id) {
    return repository.findById(id).get();
  }
}
