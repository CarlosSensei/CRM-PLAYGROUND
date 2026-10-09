import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Order } from '../model/order';
import { OrderService } from '../order-service/OrderService';
import { OrderEditComponent } from '../order-edit/order-edit';
import { SearchService } from '../../../core/services/search/search.service';
import { CreateDialogService } from '../../../core/services/create-dialog/CreateDialogService';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    OrderEditComponent
  ],
  templateUrl: './order-list.html',
  styleUrls: ['./order-list.css']
})
export class OrderListComponent implements OnInit {

  orders: Order[] = [];

  selectedOrder?: Order;

  filteredOrders: Order[] = []; 

  constructor(
    private router: Router,
    private orderService: OrderService,
    private searchService: SearchService,
    private createDialogService: CreateDialogService,
    private cdr: ChangeDetectorRef
  ) {
      this.router.events.subscribe(() => {
        this.searchService.updateSearchTerm('');
      });
  }

  globalSearch = '';

  ngOnInit(): void {

    this.loadOrders();

    this.searchService.searchTerm$.subscribe(term => {

      this.globalSearch = term;

      this.applyFilters();

      this.cdr.detectChanges();

    });

    this.createDialogService.action$.subscribe(action => {

      if (action === 'order') {
        this.selectedOrder = {
          id: 0,
          orderNumber: '',
          client: {} as any,
          createdDate: new Date(),
          status: 'Pending',
          totalAmount: 0,
          items: []
        };

        this.cdr.detectChanges();
      }
    });
      

  }

  loadOrders(): void {
    this.orders = this.orderService.getOrders();
    this.applyFilters();
  }

  editOrder(orderId: number): void {
    this.selectedOrder = this.orderService.getOrderById(orderId);
  }

  deleteOrder(orderId: number): void {
    this.orderService.deleteOrder(orderId);
    this.loadOrders();
  }

  closeEdit(): void {
    this.selectedOrder = undefined;
    this.loadOrders();
  }

  applyFilters(): void {

    const search = this.globalSearch.toLowerCase();

    this.filteredOrders = [
      ...this.orders.filter(order =>
        order.orderNumber?.toLowerCase().includes(search)
        || order.client.firstName?.toLowerCase().includes(search)
        || order.client.lastName?.toLowerCase().includes(search)
        || order.status?.toLowerCase().includes(search)
      )

    ];

  }

}