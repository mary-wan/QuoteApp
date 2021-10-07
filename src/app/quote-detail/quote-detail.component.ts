import { Quote } from './../quote';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  constructor() { }
  @Input()
  quote!: Quote;
  

  ngOnInit(): void {
  }

}
