import { Order } from '../model/order';

export const ORDERS_MOCK: Order[] = [
  {
    id: 1,
    orderNumber: 'ORD-2026-001',
    client: {
      clientId: 2,
      firstName: 'Ana',
      lastName: 'Ruiz'
    } as any,
    quoteId: 2,
    createdDate: new Date('2026-10-03'),
    status: 'InProduction',
    totalAmount: 720,
    items: [
      {
        id: 1,
        description: 'Gucci GG123',
        quantity: 1,
        unitPrice: 220,
        totalPrice: 220
      },
      {
        id: 2,
        description: 'Lente orgánica premium',
        quantity: 1,
        unitPrice: 500,
        totalPrice: 500
      }
    ]
  },
  {
    id: 2,
    orderNumber: 'ORD-2026-002',
    client: {
      clientId: 4,
      firstName: 'María',
      lastName: 'García'
    } as any,
    quoteId: 5,
    createdDate: new Date('2026-10-04'),
    status: 'Ready',
    totalAmount: 350,
    items: [
      {
        id: 3,
        description: 'Montura Police',
        quantity: 1,
        unitPrice: 150,
        totalPrice: 150
      },
      {
        id: 4,
        description: 'Lentes monofocales',
        quantity: 1,
        unitPrice: 200,
        totalPrice: 200
      }
    ]
  },
  {
    id: 3,
    orderNumber: 'ORD-2026-003',
    client: {
      clientId: 5,
      firstName: 'Pedro',
      lastName: 'Martín'
    } as any,
    quoteId: 6,
    createdDate: new Date('2026-10-05'),
    status: 'Delivered',
    totalAmount: 890,
    items: [
      {
        id: 5,
        description: 'Montura Oakley',
        quantity: 1,
        unitPrice: 290,
        totalPrice: 290
      },
      {
        id: 6,
        description: 'Lentes progresivas premium',
        quantity: 1,
        unitPrice: 600,
        totalPrice: 600
      }
    ]
  }
];