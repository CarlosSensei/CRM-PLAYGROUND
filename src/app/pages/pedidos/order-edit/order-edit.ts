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

  @Input() order!: Order;

  @Output() close = new EventEmitter<void>();

  constructor(
    private orderService: OrderService
  ) {}

  save(): void {
    this.orderService.updateOrder(this.order);
    this.close.emit();
  }

  cancel(): void {
    this.close.emit();
  }
}