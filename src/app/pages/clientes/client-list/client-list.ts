import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Client } from '../model/client.model';
import { ClientService } from '../services/client.service';
import { ClientEditComponent } from '../client-edit/client-edit';
import { SearchService } from '../../../core/services/search/search.service';
import { CLIENTS_MOCK } from '../model/client.mock';

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ClientEditComponent],
  templateUrl: './client-list.html',
  styleUrls: ['./client-list.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[] = [];
  filteredClients: Client[] = [];

  paginatedClients: Client[] = [];

  currentPage = 1;
  pageSize = 10;

  constructor(
    private router: Router,
    private clientService: ClientService,
    private searchService: SearchService,
    private cdr: ChangeDetectorRef
  ) {
      this.router.events.subscribe(() => {
        this.searchService.updateSearchTerm('');
      });
  }

  globalSearch = '';

  ngOnInit(): void {

    this.clientService.getClients().subscribe(data => {

      this.clients = data;
      this.filteredClients = [...data];

      this.updatePagination();
    });

    this.loadClients();

    this.searchService.searchTerm$
      .subscribe(term => {

        this.globalSearch = term;

        this.applyFilters();

        this.cdr.detectChanges();

      });

  }

  getClients(): Client[] {
    return CLIENTS_MOCK;
  }

  loadClients(): void {

    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
      this.filteredClients = [...clients];
      this.updatePagination();
    });

  }

  updatePagination(): void {

    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;

    this.paginatedClients = [
      ...this.filteredClients.slice(start, end)
    ];
  }

  nextPage(): void {

    if (this.currentPage < this.totalPages) {

      this.currentPage++;
      this.updatePagination();
    }
  }

  previousPage(): void {

    if (this.currentPage > 1) {

      this.currentPage--;
      this.updatePagination();
    }
  }

  get totalPages(): number {

    return Math.ceil(
      this.filteredClients.length / this.pageSize
    );
  }

  applyFilters(): void {

    const search = this.globalSearch.toLowerCase();

    this.filteredClients = [
      ...this.clients.filter(client =>

        client.name?.toLowerCase().includes(search)
        || client.firstName?.toLowerCase().includes(search)
        || client.lastName?.toLowerCase().includes(search)
        || client.email?.toLowerCase().includes(search)
        || client.phone?.toLowerCase().includes(search)
        || client.dni?.toLowerCase().includes(search)
        || client.city?.toLowerCase().includes(search)

      )
    ];    

    this.currentPage = 1;

    this.paginatedClients = [
      ...this.filteredClients.slice(0, this.pageSize)
    ];

    //this.updatePagination();
  }

  editingClient?: Client;

  editClient(clientId: number): void {

    const client = this.clients.find(
      c => c.id === clientId
    );

    if (client) {

      this.editingClient = {
        ...client
      };
    }

  }

  saveClient(updatedClient: Client): void {

    const index = this.clients.findIndex(
      c => c.id === updatedClient.id
    );

    if (index !== -1) {
      this.clients[index] = updatedClient;
    }

    this.editingClient = undefined;

  }


  closeClient(): void {
    this.editingClient = undefined;
  }

  deleteClient(client: Client): void {

    client.status = 'inactive';
  }



}