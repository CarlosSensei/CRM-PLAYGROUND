import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Client } from '../model/client.model';

@Component({
  selector: 'app-client-edit',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './client-edit.html',
  styleUrls: ['./client-edit.css']
})
export class ClientEditComponent {

  @Input() client!: Client;

  @Output() save = new EventEmitter<Client>();
  @Output() close = new EventEmitter<void>();

  saveClient(): void {
    this.save.emit(this.client);
  }

  closeModal(): void {
    this.close.emit();
  }
}