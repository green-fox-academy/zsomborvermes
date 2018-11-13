export class BlogPost{
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
    console.log(`\n${this.authorName} 
${this.title} 
${this.text} 
${this.publicationDate}`);
  } 
}