package com.greenfoxacademy.exampleexam.service;

import com.greenfoxacademy.exampleexam.model.Alias;
import com.greenfoxacademy.exampleexam.repository.AliasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class AliasService {

  @Autowired
  private AliasRepository repository;

  public void addAlias(Alias alias) {
    repository.save(alias);
  }

  public List<Alias> getAll() {
    return repository.findAll();
  }

  public Alias getById(long id) {
    return repository.findById(id);
  }

  public void deleteById(long id) {
    repository.deleteById(id);
  }

  public Alias findByAliasName(String aliasname) {
    return repository.findByAname(aliasname);
  }
}

