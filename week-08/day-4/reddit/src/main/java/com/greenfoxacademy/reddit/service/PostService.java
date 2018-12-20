package com.greenfoxacademy.reddit.service;

import com.greenfoxacademy.reddit.model.Post;
import com.greenfoxacademy.reddit.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
  private PostRepository repository;

  @Autowired
  public PostService(PostRepository repository) {
    this.repository = repository;
  }

  public void addPost(Post post) {
    repository.save(post);
  }

  public List<Post> getAll() {
    return repository.findAllByOrderByNumberOfVotesDesc();
  }

  public Post getPostById(long id) {
    return repository.findById(id).get();
  }
}
