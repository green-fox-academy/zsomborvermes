package com.greenfoxacademy.todo_mysql.repository;

import com.greenfoxacademy.todo_mysql.model.Todo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;


@Repository
public interface TodoRepository extends CrudRepository<Todo, Long> {

  ArrayList<Todo> findAllByTitleContains(String searchValue);
}
