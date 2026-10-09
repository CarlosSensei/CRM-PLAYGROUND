export interface Client {
    id: number;
    name: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    dni: string;
    city?: string;
    birthDate?: string;
    status?: 'active' | 'inactive';
    createdAt?: Date;
    
}