import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Quote } from '../model/quote';
import { QuoteService } from '../quote-service/QuoteService';

@Component({
  selector: 'app-quote-edit',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './quote-edit.html',
  styleUrls: ['./quote-edit.css']
})
export class QuoteEditComponent {

  @Input() quote!: Quote;

  @Output() close = new EventEmitter<void>();

  constructor(private quoteService: QuoteService) {}

  save(): void {

    this.quoteService.updateQuote(this.quote);

    this.close.emit();
  }

  cancel(): void {
    this.close.emit();
  }
}