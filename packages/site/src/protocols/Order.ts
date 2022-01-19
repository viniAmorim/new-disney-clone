import { Customer } from './Customer';
import { ProductCategory } from './ProductCategory';

export interface OrderFile {
  file: string;
  createdAt: string;
}

export interface OrderHistory {
  description: string;
  createdAt: string;
}

export interface OrderCommunication {
  type: string;
  message: string;
  createdAt: string;
}

export interface OrderObservation {
  observation: string;
  createdAt: string;
}

export default interface Order {
  id: number;
  customer: Customer;
  productCategory: ProductCategory;
  status: string;
  histories: OrderHistory[];
  files: OrderFile[];
  communications: OrderCommunication[];
  observations: OrderObservation[];
}
