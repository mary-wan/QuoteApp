import { Quote } from './../quote';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  constructor() { }
  @Input() quote!: Quote;
  @Output() isDelete = new EventEmitter<boolean>();

  upvotes = 0;
  downvotes = 0;

  upVote(){
    this.upvotes = this.upvotes + 1;
    
  }

  downVote(){
    this.downvotes = this.downvotes + 1;
  }
  deleteQuote(deleted:boolean){
    this.isDelete.emit(deleted);
  }

  ngOnInit(): void {
  }

}
