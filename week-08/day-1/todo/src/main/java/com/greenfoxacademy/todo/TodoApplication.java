package com.greenfoxacademy.todo;

import com.greenfoxacademy.todo.repository.Todo;
import com.greenfoxacademy.todo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TodoApplication implements CommandLineRunner {

	@Autowired
	private TodoRepository repository;

	public static void main(String[] args) {
		SpringApplication.run(TodoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		repository.save(new Todo("Todo 1"));
		repository.save(new Todo("Todo 2"));
		repository.save(new Todo("Todo 3"));
		repository.save(new Todo("Todo 4"));
		repository.save(new Todo("Todo 5"));

	}
}

