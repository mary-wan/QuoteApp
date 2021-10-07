import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() addQuote = new EventEmitter<Quote>();

  newQuote = new Quote(0,"","","",0,new Date());
  submitQuote(){
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quote(0,"","","",0,new Date());
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
