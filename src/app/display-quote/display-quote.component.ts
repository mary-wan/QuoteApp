import { Component, OnInit,Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-display-quote',
  templateUrl: './display-quote.component.html',
  styleUrls: ['./display-quote.component.css']
})
export class DisplayQuoteComponent implements OnInit {

  @Input() quote:Quote
  constructor() { }

  ngOnInit(): void {
  }

}
