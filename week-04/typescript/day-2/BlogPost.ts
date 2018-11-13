class BlogPost{
  private authorName: string;
  private title: string;
  private text: string;
  private publicationDate: string;
  
  constructor(authorName: string, title: string, text: string, publicationDate: string){
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.publicationDate = publicationDate;
  }
  
  printPost(){
    console.log(`${this.authorName} 
${this.title} 
${this.text} 
${this.publicationDate}`);
  } 
}

let post_1 = new BlogPost('John Doe','Lorem Ipsum','Lorem ipsum dolor sit amet.','2000.05.04.');
let post_2 = new BlogPost('Tim Urban','Wait but why','A popular long-form, stick-figure-illustrated blog about almost everything.','2010.10.10');
let post_3 = new BlogPost('William Turton',
'One Engineer Is Trying to Get IBM to Reckon With Trump',
'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.',
'2017.03.28');

post_1.printPost();
post_2.printPost();
post_3.printPost();