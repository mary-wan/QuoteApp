import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  constructor() { }
  highVote: number = 0; // Starts at Zero for Every Posted Quote
  favQuote:number = 0;
  
  quotes: Quote[]= [
    new Quote (0,"Kiki ","Napoleon Hill","If you cannot do great things, do small things in a great way.",1,0,new Date(2019,4,3)),
    // new Quote (1,"Mary Njenga","Eleanor Roosevelt","The future belongs to those who believe in the beauty of their dreams.",0,0,new Date(2016,6,5))
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
    for (var i = 0; i < this.quotes.length; i++) { // Loop through Current Posted quotes
       if (this.quotes[i].upvotes > this.highVote) { // If noOfVotes for current looped quote is higher than the current highestVotes
          this.highVote = this.quotes[i].upvotes; // Assign the new noOfVotes value to highestVotes
          this.favQuote = i; // Take the index of the quote with the highest noOfVotes and assign its index to highestQuote
       }
       
    }

 }

  

  ngOnInit(): void {
  }

}
