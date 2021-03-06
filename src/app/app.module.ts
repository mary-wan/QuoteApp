import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { NavComponent } from './nav/nav.component';
import { QuoteDetailComponent } from './quote-detail/quote-detail.component';
import { DateCountPipe } from './date-count.pipe';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { HighestVoteDirective } from './highest-vote.directive';
import { DisplayQuoteComponent } from './display-quote/display-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    NavComponent,
    QuoteDetailComponent,
    DateCountPipe,
    FormComponent,
    HighestVoteDirective,
    DisplayQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
