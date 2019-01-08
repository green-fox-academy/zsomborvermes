package com.greenfoxacademy.exampleexam.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Random;

@Entity
public class Alias {

  @Id
  @GeneratedValue
  private long id;

  private String url;
  private String aname;

  @JsonIgnore
  private String secretCode;

  private int hitCount;

  public Alias(){
    Random random = new Random();
    this.secretCode = String.format("%04d", random.nextInt(10000));
    this.hitCount = 0;
  }

  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }

  public void setId(long id) {
    this.id = id;
  }

  public long getId() {
    return id;
  }

  public String getAname() {
    return aname;
  }

  public void setAname(String aname) {
    this.aname = aname;
  }

  public String getSecretCode() {
    return secretCode;
  }

  public void setSecretCode(String secretCode) {
    this.secretCode = secretCode;
  }

  public void incrementHitCount() {
    hitCount++;
  }

  public int getHitCount() {
    return hitCount;
  }

  public void setHitCount(int hitCount) {
    this.hitCount = hitCount;
  }
}
