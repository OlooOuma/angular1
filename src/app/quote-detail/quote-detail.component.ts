// import { Quotes } from './../quotes';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from 'src/app/quotes';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quotes: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();
  quoteComplete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit() {
  }

}
