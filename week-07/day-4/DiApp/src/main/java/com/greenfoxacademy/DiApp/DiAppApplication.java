package com.greenfoxacademy.DiApp;

import com.greenfoxacademy.DiApp.services.MyColor;
import com.greenfoxacademy.DiApp.services.Printer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DiAppApplication implements CommandLineRunner {

	@Autowired
	private Printer printer;

	@Autowired
	private MyColor color;

	public static void main(String[] args) {
		SpringApplication.run(DiAppApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		color.printColor();
		printer.log("hello");
	}
}

