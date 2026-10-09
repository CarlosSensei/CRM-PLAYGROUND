import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchService } from '../services/search/search.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {

  searchText = '';

  constructor(private searchService: SearchService) {}

  onSearch(): void {

    this.searchService.updateSearchTerm(this.searchText);
  }  

}