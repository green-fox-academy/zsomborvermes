package com.greenfoxacademy.reddit.controller;

import com.greenfoxacademy.reddit.model.Post;
import com.greenfoxacademy.reddit.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class RedditController {

  private PostService posts;

  @Autowired
  public RedditController(PostService posts) {
    this.posts = posts;
  }

  @GetMapping("/")
  public String showMain(Model model) {
    model.addAttribute("posts", posts.getAll());
    return "main";
  }

  @GetMapping("/create-post")
  public String createPostForm(Model model) {
    model.addAttribute("post", new Post());
    return "create-post";
  }

  @PostMapping("/create-post")
  public String createPost(@ModelAttribute Post post) {
    posts.addPost(post);
    return "redirect:/";
  }

  @GetMapping("/{id}/increment")
  public String incrementVote(@PathVariable long id) {
    Post updatedPost = posts.getPostById(id);
    updatedPost.incrementVotes();
    posts.addPost(updatedPost);
    return "redirect:/";
  }

  @GetMapping("/{id}/decrement")
  public String decrementVote(@PathVariable long id) {
    Post updatedPost = posts.getPostById(id);
    updatedPost.decrementVotes();
    posts.addPost(updatedPost);
    return "redirect:/";
  }
}
