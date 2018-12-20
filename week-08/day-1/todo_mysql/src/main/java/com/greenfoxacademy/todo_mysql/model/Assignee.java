package com.greenfoxacademy.todo_mysql.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Assignee {

  @Id
  @GeneratedValue
  private long id;

  private String name;
  private String email;

  @OneToMany(mappedBy = "assignee")
  private List<Todo> todos;

  public Assignee() {
  }

  public Assignee(String name, String email) {
    this.email = email;
    this.name = name;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public List<Todo> getTodos() {
    return todos;
  }

  public void setTodos(List<Todo> todos) {
    this.todos = todos;
  }
}
