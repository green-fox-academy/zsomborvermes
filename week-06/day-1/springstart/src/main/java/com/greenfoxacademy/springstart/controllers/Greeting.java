package com.greenfoxacademy.springstart.controllers;

public class Greeting {
    private long long_id;
    private String content;

    public Greeting(long long_id, String content) {
        this.long_id = long_id;
        this.content = content;
    }

    public long getLong_id() {

        return long_id;
    }

    public String getContent() {

        return content;
    }

    public void setLong_id(long long_id) {
        this.long_id = long_id;
    }

    public void setContent(String content) {

        this.content = content;
    }
}
