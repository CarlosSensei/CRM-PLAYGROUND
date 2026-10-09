import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../services/search/search.service';
import { CreateDialogService } from '../services/create-dialog/CreateDialogService';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent implements OnInit {

  searchText = '';
  currentSection = 'default';

  constructor(
    private router: Router,
    private searchService: SearchService,
    private createDialogService: CreateDialogService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.updateCurrentSection();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {

        this.updateCurrentSection();

        this.cdr.detectChanges();

      });

  }


  onSearch(): void {

    this.searchService.updateSearchTerm(this.searchText);
  }  

  onAdd(): void {

    const url = this.router.url;

    if (url.includes('clients')) {

      this.createDialogService.open('client');

    } else if (url.includes('quotes')) {

      this.createDialogService.open('quote');

    } else if (url.includes('orders')) {

      this.createDialogService.open('order');

    }

  }

  private updateCurrentSection(): void {

    const url = this.router.url;

    if (url.includes('/clients')) {

      this.currentSection = 'clients';
    
    } else if (url.includes('/quotes')) {

      this.currentSection = 'quotes';
    
    } else if (url.includes('/orders')) {
    
      this.currentSection = 'orders';
    
    } else {
      
      this.currentSection = 'default';
    
    }

  }

}