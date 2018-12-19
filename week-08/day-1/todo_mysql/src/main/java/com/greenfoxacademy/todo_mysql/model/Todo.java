package com.greenfoxacademy.todo_mysql.model;

import org.hibernate.annotations.Fetch;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Todo {

  @Id
  @GeneratedValue
  private long id;

  @Temporal(TemporalType.TIMESTAMP)
  private Date createdAt = new Date();

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "assignee_id")
  private Assignee assignee;

  private String title;
  private boolean urgent;
  private boolean done;

  public Assignee getAssignee() {
    return assignee;
  }

  public void setAssignee(Assignee assignee) {
    this.assignee = assignee;
  }

  public Date getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(Date createdAt) {
    this.createdAt = createdAt;
  }

  public Todo(String title) {
    this.title = title;
    this.urgent = false;
    this.done = false;
    this.createdAt = new Date();
  }

  public void setId(long id) {
    this.id = id;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public void setUrgent(boolean urgent) {
    this.urgent = urgent;
  }

  public void setDone(boolean done) {
    this.done = done;
  }

  public Todo() {
  }

  public long getId() {
    return id;
  }

  public String getTitle() {
    return title;
  }

  public boolean isUrgent() {
    return urgent;
  }

  public boolean isDone() {
    return done;
  }
}
