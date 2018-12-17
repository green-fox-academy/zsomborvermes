package com.greenfoxacademy.todo_mysql;

import com.greenfoxacademy.todo_mysql.repository.Todo;
import com.greenfoxacademy.todo_mysql.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TodoMysqlApplication {


	public static void main(String[] args) {
		SpringApplication.run(TodoMysqlApplication.class, args);
	}

}

