import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  constructor() { }
  highVote: number = 0; 
  mostUpvote:number = 0;
  
  quotes: Quote[]= [
    // new Quote (0,"Kiki ","Napoleon Hill","If you cannot do great things, do small things in a great way.",0,0,new Date(2019,4,3)),
    new Quote (1,"Maria","Dijkstra","If debugging is the process of removing software bugs, then programming must be the process of putting them in.",0,0,new Date(2020,6,5))
  ]
  addNewQuote(quote: Quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.date = new Date(quote.date);
    this.quotes.push(quote);
  }
  quoteDelete(isDelete:boolean, index:number){
    if(isDelete){
      let confirmDelete = confirm (`Are you sure you want to delete ${this.quotes[index].author} quote? ` );
      if (confirmDelete){
        this.quotes.splice(index,1);
    }
    }
  }
  quoteUpvote(isUpvote:boolean,index:number){
    if(isUpvote){
      this.quotes[index].upvotes +=1;
    }
  }
  quoteDownvote(isDownvote:boolean,index:number){
    if(isDownvote){
      this.quotes[index].downvotes +=1;
    }
  }
  highestUpvote(){
    for (var i = 0; i < this.quotes.length; i++) { //loops through the quotes array and returns the index to the most upvoted quote
       if (this.quotes[i].upvotes > this.highVote) { 
          this.highVote = this.quotes[i].upvotes; 
          this.mostUpvote = i;
       }
       
    }

 }

  

  ngOnInit(): void {
  }

}
