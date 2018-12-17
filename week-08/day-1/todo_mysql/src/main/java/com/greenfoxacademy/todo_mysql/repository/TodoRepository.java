package com.greenfoxacademy.todo_mysql.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends CrudRepository<Todo, Long> {
}
