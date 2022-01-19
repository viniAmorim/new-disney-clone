import { CustomerPhone } from './CustomerPhone';

export interface Customer {
  id: number;
  name: string;
  email: string;
  birthDate: string;
  occupationId: number;
  maritalStatus: string;
  phones: CustomerPhone[];
}
