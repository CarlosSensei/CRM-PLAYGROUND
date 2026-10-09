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
      clientId: 3,
      firstName: 'Carlos',
      lastName: 'López'
    } as any,
    quoteId: 3,
    createdDate: new Date('2026-10-04'),
    status: 'Ready',
    totalAmount: 280,
    items: [
      {
        id: 3,
        description: 'Montura Vogue',
        quantity: 1,
        unitPrice: 120,
        totalPrice: 120
      },
      {
        id: 4,
        description: 'Lentes monofocales',
        quantity: 1,
        unitPrice: 160,
        totalPrice: 160
      }
    ]
  },
  {
    id: 3,
    orderNumber: 'ORD-2026-003',
    client: {
      clientId: 5,
      firstName: 'Luis',
      lastName: 'Fernández'
    } as any,
    quoteId: 5,
    createdDate: new Date('2026-10-05'),
    status: 'Delivered',
    totalAmount: 510,
    items: [
      {
        id: 5,
        description: 'Oakley OX3217',
        quantity: 1,
        unitPrice: 210,
        totalPrice: 210
      },
      {
        id: 6,
        description: 'Lentes antirreflejantes',
        quantity: 1,
        unitPrice: 300,
        totalPrice: 300
      }
    ]
  },
  {
    id: 4,
    orderNumber: 'ORD-2026-004',
    client: {
      clientId: 7,
      firstName: 'Pedro',
      lastName: 'Sánchez'
    } as any,
    quoteId: 7,
    createdDate: new Date('2026-10-06'),
    status: 'InProduction',
    totalAmount: 740,
    items: [
      {
        id: 7,
        description: 'Oakley Radar EV',
        quantity: 1,
        unitPrice: 290,
        totalPrice: 290
      },
      {
        id: 8,
        description: 'Lentes fotocromáticas',
        quantity: 1,
        unitPrice: 450,
        totalPrice: 450
      }
    ]
  },
  {
    id: 5,
    orderNumber: 'ORD-2026-005',
    client: {
      clientId: 8,
      firstName: 'Elena',
      lastName: 'Moreno'
    } as any,
    quoteId: 8,
    createdDate: new Date('2026-10-07'),
    status: 'Pending',
    totalAmount: 360,
    items: [
      {
        id: 9,
        description: 'Carolina Herrera',
        quantity: 1,
        unitPrice: 160,
        totalPrice: 160
      },
      {
        id: 10,
        description: 'Lentes Blue Light',
        quantity: 1,
        unitPrice: 200,
        totalPrice: 200
      }
    ]
  },
  {
    id: 6,
    orderNumber: 'ORD-2026-006',
    client: {
      clientId: 10,
      firstName: 'Sofía',
      lastName: 'Navarro'
    } as any,
    quoteId: 10,
    createdDate: new Date('2026-10-08'),
    status: 'Ready',
    totalAmount: 950,
    items: [
      {
        id: 11,
        description: 'Tom Ford FT580',
        quantity: 1,
        unitPrice: 350,
        totalPrice: 350
      },
      {
        id: 12,
        description: 'Lentes progresivas premium',
        quantity: 1,
        unitPrice: 600,
        totalPrice: 600
      }
    ]
  },
  {
    id: 7,
    orderNumber: 'ORD-2026-007',
    client: {
      clientId: 1,
      firstName: 'Juan',
      lastName: 'Pérez'
    } as any,
    quoteId: 1,
    createdDate: new Date('2026-10-09'),
    status: 'Pending',
    totalAmount: 450,
    items: [
      {
        id: 13,
        description: 'RayBan RB3447',
        quantity: 1,
        unitPrice: 150,
        totalPrice: 150
      },
      {
        id: 14,
        description: 'Lentes progresivas',
        quantity: 1,
        unitPrice: 300,
        totalPrice: 300
      }
    ]
  },
  {
    id: 8,
    orderNumber: 'ORD-2026-008',
    client: {
      clientId: 4,
      firstName: 'Ana',
      lastName: 'Martín'
    } as any,
    quoteId: 4,
    createdDate: new Date('2026-10-10'),
    status: 'Cancelled',
    totalAmount: 890,
    items: [
      {
        id: 15,
        description: 'Gucci GG123',
        quantity: 1,
        unitPrice: 350,
        totalPrice: 350
      },
      {
        id: 16,
        description: 'Lentes progresivas premium',
        quantity: 1,
        unitPrice: 540,
        totalPrice: 540
      }
    ]
  },
  {
    id: 9,
    orderNumber: 'ORD-2026-009',
    client: {
      clientId: 6,
      firstName: 'Laura',
      lastName: 'Ruiz'
    } as any,
    quoteId: 6,
    createdDate: new Date('2026-10-11'),
    status: 'Delivered',
    totalAmount: 190,
    items: [
      {
        id: 17,
        description: 'Nano Kids',
        quantity: 1,
        unitPrice: 90,
        totalPrice: 90
      },
      {
        id: 18,
        description: 'Lentes orgánicas',
        quantity: 1,
        unitPrice: 100,
        totalPrice: 100
      }
    ]
  },
  {
    id: 10,
    orderNumber: 'ORD-2026-010',
    client: {
      clientId: 9,
      firstName: 'Javier',
      lastName: 'Torres'
    } as any,
    quoteId: 9,
    createdDate: new Date('2026-10-12'),
    status: 'InProduction',
    totalAmount: 430,
    items: [
      {
        id: 19,
        description: 'Hugo Boss',
        quantity: 1,
        unitPrice: 180,
        totalPrice: 180
      },
      {
        id: 20,
        description: 'Lentes Blue Control',
        quantity: 1,
        unitPrice: 250,
        totalPrice: 250
      }
    ]
  }
];