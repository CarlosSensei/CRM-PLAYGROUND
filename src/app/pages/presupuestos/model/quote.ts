import { Client } from '../../clientes/model/client.model';
import { QuoteItem } from './quote-item';

export interface Quote {
  id: number;
  client: Client;

  createdDate: Date;

  status:
    | 'Draft'
    | 'Sent'
    | 'Accepted'
    | 'Rejected'
    | 'Expired';

  items: QuoteItem[];

  totalAmount: number;

  notes?: string;
}