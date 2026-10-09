import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Order } from '../model/order';
import { OrderService } from '../order-service/OrderService';
import { ClientService } from '../../clientes/services/client.service';
import { Client } from '../../clientes/model/client.model';

@Component({
  selector: 'app-order-edit',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './order-edit.html',
  styleUrls: ['./order-edit.css']
})
export class OrderEditComponent {

  clients: Client[] = [];

  @Input() order!: Order;

  @Output() close = new EventEmitter<void>();

  constructor(
    private orderService: OrderService,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {

    this.clientService.getClients()
      .subscribe(clients => {
        this.clients = clients;
      });

  }

  addItem(): void {

    if (!this.order.items) {
      this.order.items = [];
    }

    this.order.items.push({
      id: 0,
      description: '',
      quantity: 1,
      unitPrice: 0,
      totalPrice: 0
    });

  }

  save(): void {
    this.orderService.updateOrder(this.order);
    this.close.emit();
  }

  cancel(): void {
    this.close.emit();
  }
  
}