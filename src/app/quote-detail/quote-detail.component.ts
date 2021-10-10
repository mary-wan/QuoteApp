import { Quote } from './../quote';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  constructor() { }
  @Input() quote!: Quote;
  @Output() isDelete = new EventEmitter<boolean>();
  @Output() isUpvote = new EventEmitter<boolean>();
  @Output() isDownvote = new EventEmitter<boolean>();
  @Output() highest = new EventEmitter();


  upVote(upvoted:boolean){
    this.isUpvote.emit(upvoted);
  }

  downVote(downvoted:boolean){
    this.isDownvote.emit(downvoted);
  }
  deleteQuote(deleted:boolean){
    this.isDelete.emit(deleted);
  }
  highestUpvotedQuote(){
    this.highest.emit();
  }

  ngOnInit(): void {
  }

}
