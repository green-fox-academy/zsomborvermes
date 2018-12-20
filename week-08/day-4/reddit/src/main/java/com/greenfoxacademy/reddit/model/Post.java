package com.greenfoxacademy.reddit.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public class Post {

  @Id
  @GeneratedValue
  private long id;

  private String title;
  private String url;
  private int numberOfVotes = 1;

  public Post () { }

  public Post (String title, String url) {
    this.title = title;
    this.url = url;
  }

  public void incrementVotes() {
    this.numberOfVotes++;
  }

  public void decrementVotes() {
    this.numberOfVotes--;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  public int getNumberOfVotes() {
    return numberOfVotes;
  }

  public void setNumberOfVotes(int numberOfVotes) {
    this.numberOfVotes = numberOfVotes;
  }
}
