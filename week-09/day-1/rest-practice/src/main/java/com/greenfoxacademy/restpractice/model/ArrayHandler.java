package com.greenfoxacademy.restpractice.model;


import java.util.HashMap;

public class ArrayHandler {
  private String what;
  private int[] numbers;

  public ArrayHandler() {

  }

  public HashMap<?, ?> doOperation() {

    HashMap<String, String> error = new HashMap<>();
    error.put("error", "Wrong operation!");

    try {
      if (what.equals("sum")) {
        HashMap<String, Integer> result = new HashMap<>();
        int sum = 0;
        for (int i = 0; i < numbers.length; i++) {
          sum += numbers[i];
        }
        result.put("result", sum);
        return result;
      }
      if (what.equals("multiply")) {
        HashMap<String, Integer> result = new HashMap<>();
        int mult = 1;
        for (int i = 0; i < numbers.length; i++) {
          mult *= numbers[i];
        }
        result.put("result", mult);
        return result;
      }
      if (what.equals("double")) {
        HashMap<String, int[]> result = new HashMap<>();
        for (int i = 0; i < numbers.length; i++) {
          numbers[i] *= 2;
        }
        result.put("result", numbers);
        return result;
      }
      return error;

    } catch (Exception e) {
      error.clear();
      error.put("error", "Missing operation or numbers");
      return error;
    }

  }

  public String getWhat() {
    return what;
  }

  public void setWhat(String what) {
    this.what = what;
  }

  public int[] getNumbers() {
    return numbers;
  }

  public void setNumbers(int[] numbers) {
    this.numbers = numbers;
  }
}
