import { Quotes } from './../quotes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

 quotes = [
    // new Quotes(0, 'Gwede', 'Opuk Jakinda', 'Positivity is life', new Date(2019, 4, 6))
 ];
 quoteComplete(isComplete, index) {
   if (isComplete) {
     const toDelete = confirm(`are you ${this.quotes[index].name}` );
     if (toDelete) {
       this.quotes.splice(index, 1);
     }
   }
 }
 formReceive(quote) {
   this.quotes.push(quote);
 }
 addVote(index) {
// tslint:disable-next-line: no-unused-expression
   this.quotes[index].upvote + 1;
 }
 subtVote(index) {
// tslint:disable-next-line: no-unused-expression
  this.quotes[index].downvote + 1;
}

  constructor() { }

  ngOnInit() {
  }

}
