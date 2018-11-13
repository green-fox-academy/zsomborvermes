import { BlogPost } from "./BlogPost";

export class Blog {
  private postList: BlogPost[] = [];

  add(post: BlogPost) {
    this.postList.push(post);
  }

  delete(index: number){
    this.postList.splice(index, 1);
  }

  update(index: number, newPost: BlogPost){
    this.postList.splice(index, 1, newPost);
  }

  print(){
    this.postList.forEach(e => e.printPost());
  }
}

let post_1 = new BlogPost('John Doe','Lorem Ipsum','Lorem ipsum dolor sit amet.','2000.05.04.');
let post_2 = new BlogPost('Tim Urban','Wait but why','A popular long-form, stick-figure-illustrated blog about almost everything.','2010.10.10');
let post_3 = new BlogPost('William Turton',
'One Engineer Is Trying to Get IBM to Reckon With Trump',
'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.',
'2017.03.28');

let blog = new Blog();

blog.add(post_1);
blog.add(post_2);
blog.add(post_3);

blog.print();
blog.update(1, new BlogPost('alma','alma','alma','alma'));
blog.print();
blog.delete(1);
blog.print();
