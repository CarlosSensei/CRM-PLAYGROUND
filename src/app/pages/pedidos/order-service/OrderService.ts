import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { ORDERS_MOCK } from '../model/order.mock';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orders: Order[] = [...ORDERS_MOCK];

  getOrders(): Order[] {
    return this.orders;
  }

  getOrderById(id: number): Order | undefined {
    return this.orders.find(o => o.id === id);
  }

  updateOrder(order: Order): void {
    const index = this.orders.findIndex(o => o.id === order.id);

    if (index !== -1) {
      this.orders[index] = order;
    }
  }

  deleteOrder(id: number): void {
    this.orders = this.orders.filter(o => o.id !== id);
  }
}