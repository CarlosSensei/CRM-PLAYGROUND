import { Injectable } from '@angular/core';
import { Quote } from '../model/quote';
import { QUOTES_MOCK } from '../model/quote.mock';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private quotes: Quote[] = [...QUOTES_MOCK];

  getQuotes(): Quote[] {
    return this.quotes;
  }

  getQuoteById(id: number): Quote | undefined {
    return this.quotes.find(q => q.id === id);
  }

  updateQuote(updatedQuote: Quote): void {
    const index = this.quotes.findIndex(q => q.id === updatedQuote.id);

    if (index !== -1) {
      this.quotes[index] = updatedQuote;
    }
  }

  deleteQuote(quoteId: number): void {
    this.quotes = this.quotes.filter(q => q.id !== quoteId);
  }
}
