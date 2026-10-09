import { Quote } from '../model/quote';

export const QUOTES_MOCK: Quote[] = [
  {
    id: 1,
    client: {
      clientId: 1,
      firstName: 'Juan',
      lastName: 'Pérez'
    } as any,
    createdDate: new Date('2026-10-01'),
    status: 'Draft',
    totalAmount: 450,
    notes: 'Gafas progresivas',
    items: [
      {
        id: 1,
        productType: 'Frame',
        description: 'RayBan RB3447',
        quantity: 1,
        unitPrice: 150,
        totalPrice: 150
      },
      {
        id: 2,
        productType: 'Lens',
        description: 'Lentes progresivas',
        quantity: 1,
        unitPrice: 300,
        totalPrice: 300
      }
    ]
  },
  {
    id: 2,
    client: {
      clientId: 2,
      firstName: 'Ana',
      lastName: 'Ruiz'
    } as any,
    createdDate: new Date('2026-10-02'),
    status: 'Accepted',
    totalAmount: 720,
    notes: 'Montura premium',
    items: [
      {
        id: 3,
        productType: 'Frame',
        description: 'Gucci GG123',
        quantity: 1,
        unitPrice: 220,
        totalPrice: 220
      },
      {
        id: 4,
        productType: 'Lens',
        description: 'Lente orgánica premium',
        quantity: 1,
        unitPrice: 500,
        totalPrice: 500
      }
    ]
  },
  {
    id: 3,
    client: {
      clientId: 3,
      firstName: 'Carlos',
      lastName: 'López'
    } as any,
    createdDate: new Date('2026-10-05'),
    status: 'Rejected',
    totalAmount: 180,
    notes: '',
    items: [
      {
        id: 5,
        productType: 'Accessory',
        description: 'Gafas de sol',
        quantity: 1,
        unitPrice: 180,
        totalPrice: 180
      }
    ]
  }
];