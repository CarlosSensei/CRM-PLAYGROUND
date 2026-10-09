import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Quote } from '../model/quote';
import { QuoteService } from '../quote-service/QuoteService';
import { QuoteEditComponent } from '../quote-edit/quote-edit';
import { SearchService } from '../../../core/services/search/search.service';
import { CreateDialogService } from '../../../core/services/create-dialog/CreateDialogService';

@Component({
  selector: 'app-quote-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    QuoteEditComponent
  ],
  templateUrl: './quote-list.html',
  styleUrls: ['./quote-list.css']
})
export class QuoteListComponent implements OnInit {

  quotes: Quote[] = [];

  selectedQuote?: Quote;

  filteredQuotes: Quote[] = [];

  constructor(
    private router: Router,
    private quoteService: QuoteService,
    private searchService: SearchService,
    private createDialogService: CreateDialogService,
    private cdr: ChangeDetectorRef
  ) {}

  globalSearch = '';

  ngOnInit(): void {

    this.loadQuotes();

    this.searchService.searchTerm$.subscribe(term => {

      this.globalSearch = term;

      this.applyFilters();

      this.cdr.detectChanges();

      });

    this.createDialogService.action$.subscribe(action => {

      if (action === 'quote') {

        this.selectedQuote = {
          id: 0,
          client: {} as any,
          createdDate: new Date(),
          status: 'Draft',
          totalAmount: 0,
          notes: '',
          items: []
        };

        this.cdr.detectChanges();
      }
    });

  }

  loadQuotes(): void {
    this.quotes = this.quoteService.getQuotes();
    this.applyFilters();
  }

  editQuote(id: number): void {
    this.selectedQuote = this.quoteService.getQuoteById(id);
  }

  deleteQuote(id: number): void {
    this.quoteService.deleteQuote(id);
    this.loadQuotes();
  }

  closeEdit(): void {
    this.selectedQuote = undefined;
    this.loadQuotes();
  }

  applyFilters(): void {

    const search = this.globalSearch.toLowerCase();

    this.filteredQuotes = [
      ...this.quotes.filter(quote =>
        quote.id.toString().includes(search)
        || quote.client.firstName?.toLowerCase().includes(search)
        || quote.client.lastName?.toLowerCase().includes(search)
        || quote.status?.toLowerCase().includes(search)
      )

    ];

  }

}