// Products and Images related types
export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  active: boolean;
}

export interface Image {
  id: string;
  url: string;
  referenceId: string;
  referenceType: string;
}

export interface ProductRating {
  productId: string;
  userId: string;
  rating: number;
  comment: string;
  date: Date;
}
