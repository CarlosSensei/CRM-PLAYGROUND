import { Client } from './client.model';

export const CLIENTS_MOCK: Client[] = Array.from(
  { length: 100 },
  (_, index) => ({
    id: index + 1,
    name: `Nombre${index + 1}`,
    firstName: `Apellido${index + 1}`,
    lastName: `SegundoApellido${index + 1}`,
    phone: `600000${String(index).padStart(3, '0')}`,
    email: `cliente${index + 1}@mail.com`,
    dni: `123456${index}A`,
    city: 'Barcelona',
    birthDate: `1990-01-${String((index % 28) + 1).padStart(2, '0')}`,
    status: 'active',
    createdAt: new Date(`1990-01-${String((index % 28) + 1).padStart(2, '0')}`)
  })
);