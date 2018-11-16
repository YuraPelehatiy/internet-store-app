import { schema } from 'normalizr';

export const Product = new schema.Entity('products');
export const ProductCollection = [Product];

export const AdminProduct = new schema.Entity('products');
export const AdminProductCollection = [Product];

export const AdminUser = new schema.Entity('users');
export const AdminUserCollection = [AdminUser];