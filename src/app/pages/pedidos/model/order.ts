import { Client } from '../../clientes/model/client.model';
import { OrderItem } from './order-item';

export interface Order {
  id: number;

  orderNumber: string;

  client: Client;

  quoteId?: number;

  createdDate: Date;

  status:
    | 'Pending'
    | 'InProduction'
    | 'Ready'
    | 'Delivered'
    | 'Cancelled';

  totalAmount: number;

  items: OrderItem[];
}