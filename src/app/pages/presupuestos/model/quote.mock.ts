import { Quote } from '../model/quote';

export const QUOTES_MOCK: Quote[] = [
  {
    id: 1,
    client: {
      id: 1,
      name: 'Juan',
      firstName: 'Pérez'
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
      id: 2,
      name: 'María',
      firstName: 'García'
    } as any,
    createdDate: new Date('2026-10-02'),
    status: 'Accepted',
    totalAmount: 620,
    notes: 'Lentillas mensuales',
    items: [
      {
        id: 3,
        productType: 'ContactLens',
        description: 'Lentillas mensuales',
        quantity: 2,
        unitPrice: 110,
        totalPrice: 220
      },
      {
        id: 4,
        productType: 'Accessory',
        description: 'Líquido de mantenimiento',
        quantity: 4,
        unitPrice: 25,
        totalPrice: 100
      },
      {
        id: 5,
        productType: 'ContactLens',
        description: 'Adaptación lentillas',
        quantity: 1,
        unitPrice: 300,
        totalPrice: 300
      }
    ]
  },
  {
    id: 3,
    client: {
      id: 3,
      name: 'Carlos',
      firstName: 'López'
    } as any,
    createdDate: new Date('2026-10-03'),
    status: 'Draft',
    totalAmount: 280,
    notes: 'Gafas de lectura',
    items: [
      {
        id: 6,
        productType: 'Frame',
        description: 'Montura Vogue',
        quantity: 1,
        unitPrice: 120,
        totalPrice: 120
      },
      {
        id: 7,
        productType: 'Lens',
        description: 'Lentes monofocales',
        quantity: 1,
        unitPrice: 160,
        totalPrice: 160
      }
    ]
  },
  {
    id: 4,
    client: {
      id: 4,
      name: 'Ana',
      firstName: 'Martín'
    } as any,
    createdDate: new Date('2026-10-04'),
    status: 'Rejected',
    totalAmount: 890,
    notes: 'Gafas premium',
    items: [
      {
        id: 8,
        productType: 'Frame',
        description: 'Gucci GG123',
        quantity: 1,
        unitPrice: 350,
        totalPrice: 350
      },
      {
        id: 9,
        productType: 'Lens',
        description: 'Lentes progresivas premium',
        quantity: 1,
        unitPrice: 540,
        totalPrice: 540
      }
    ]
  },
  {
    id: 5,
    client: {
      id: 5,
      name: 'Luis',
      firstName: 'Fernández'
    } as any,
    createdDate: new Date('2026-10-05'),
    status: 'Accepted',
    totalAmount: 510,
    notes: 'Renovación completa',
    items: [
      {
        id: 10,
        productType: 'Frame',
        description: 'Oakley OX3217',
        quantity: 1,
        unitPrice: 210,
        totalPrice: 210
      },
      {
        id: 11,
        productType: 'Lens',
        description: 'Lentes antirreflejantes',
        quantity: 1,
        unitPrice: 300,
        totalPrice: 300
      }
    ]
  },
  {
    id: 6,
    client: {
      id: 6,
      name: 'Laura',
      firstName: 'Ruiz'
    } as any,
    createdDate: new Date('2026-10-06'),
    status: 'Draft',
    totalAmount: 190,
    notes: 'Gafas infantiles',
    items: [
      {
        id: 12,
        productType: 'Frame',
        description: 'Nano Kids',
        quantity: 1,
        unitPrice: 90,
        totalPrice: 90
      },
      {
        id: 13,
        productType: 'Lens',
        description: 'Lentes orgánicas',
        quantity: 1,
        unitPrice: 100,
        totalPrice: 100
      }
    ]
  },
  {
    id: 7,
    client: {
      id: 7,
      name: 'Pedro',
      firstName: 'Sánchez'
    } as any,
    createdDate: new Date('2026-10-07'),
    status: 'Accepted',
    totalAmount: 740,
    notes: 'Gafas deportivas',
    items: [
      {
        id: 14,
        productType: 'Frame',
        description: 'Oakley Radar EV',
        quantity: 1,
        unitPrice: 290,
        totalPrice: 290
      },
      {
        id: 15,
        productType: 'Lens',
        description: 'Lentes fotocromáticas',
        quantity: 1,
        unitPrice: 450,
        totalPrice: 450
      }
    ]
  },
  {
    id: 8,
    client: {
      id: 8,
      name: 'Elena',
      firstName: 'Moreno'
    } as any,
    createdDate: new Date('2026-10-08'),
    status: 'Accepted',
    totalAmount: 360,
    notes: 'Segundas gafas',
    items: [
      {
        id: 16,
        productType: 'Frame',
        description: 'Carolina Herrera',
        quantity: 1,
        unitPrice: 160,
        totalPrice: 160
      },
      {
        id: 17,
        productType: 'Lens',
        description: 'Lentes Blue Light',
        quantity: 1,
        unitPrice: 200,
        totalPrice: 200
      }
    ]
  },
  {
    id: 9,
    client: {
      id: 9,
      name: 'Javier',
      firstName: 'Torres'
    } as any,
    createdDate: new Date('2026-10-09'),
    status: 'Draft',
    totalAmount: 430,
    notes: 'Pantallas y oficina',
    items: [
      {
        id: 18,
        productType: 'Frame',
        description: 'Hugo Boss',
        quantity: 1,
        unitPrice: 180,
        totalPrice: 180
      },
      {
        id: 19,
        productType: 'Lens',
        description: 'Lentes Blue Control',
        quantity: 1,
        unitPrice: 250,
        totalPrice: 250
      }
    ]
  },
  {
    id: 10,
    client: {
      id: 10,
      name: 'Sofía',
      firstName: 'Navarro'
    } as any,
    createdDate: new Date('2026-10-10'),
    status: 'Accepted',
    totalAmount: 950,
    notes: 'Pack premium completo',
    items: [
      {
        id: 20,
        productType: 'Frame',
        description: 'Tom Ford FT580',
        quantity: 1,
        unitPrice: 350,
        totalPrice: 350
      },
      {
        id: 21,
        productType: 'Lens',
        description: 'Lentes progresivas premium',
        quantity: 1,
        unitPrice: 600,
        totalPrice: 600
      }
    ]
  }

];