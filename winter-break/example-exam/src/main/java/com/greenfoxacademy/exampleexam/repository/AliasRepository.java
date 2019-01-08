package com.greenfoxacademy.exampleexam.repository;

import com.greenfoxacademy.exampleexam.model.Alias;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AliasRepository extends CrudRepository<Alias, Long> {
  Alias findByAname(String aliasname);
  Alias findById(long id);
  List<Alias> findAll();
}
