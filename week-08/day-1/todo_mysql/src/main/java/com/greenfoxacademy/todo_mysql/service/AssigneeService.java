package com.greenfoxacademy.todo_mysql.service;

import com.greenfoxacademy.todo_mysql.model.Assignee;
import com.greenfoxacademy.todo_mysql.repository.AssigneeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class AssigneeService {

  private AssigneeRepository repository;

  @Autowired
  public AssigneeService(AssigneeRepository repository) {
    this.repository = repository;
  }

  public void addAssignee(Assignee assignee) {
    repository.save(assignee);
  }

  public ArrayList<Assignee> getAll() {
    return (ArrayList<Assignee>) repository.findAll();
  }

  public void deleteAssignee(long id) {
    repository.findById(id).get().getTodos().forEach(todo -> todo.setAssignee(null));
    repository.deleteById(id);
  }

  public Assignee getAssigneeById(long id) {
    return repository.findById(id).get();
  }
}
