import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor() { }

  quotes: Quote[]= [
    new Quote (1,"Mary Njenga","Eleanor Roosevelt","The future belongs to those who believe in the beauty of their dreams.",2,new Date(2016,6,5)),
    new Quote (0,"Kiki ","Napoleon Hill","If you cannot do great things, do small things in a great way.",2,new Date(2019,4,3))
  ]

  ngOnInit(): void {
  }

}
