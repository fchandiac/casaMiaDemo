// Rewards and Collection related types
export interface Reward {
  id: string;
  type: string;
  validityDate: Date;
  value: number;
  productId?: string;
  status: string;
  badgeId?: string;
}

export interface CollectionCard {
  id: string;
  userId: string;
  goal: number;
  issueDate: Date;
  expirationDate: Date;
  current: number;
  productId: string;
  name: string;
  image: string;
  rewardId: string;
}

export interface Receipt {
  id: string;
  userId: string;
  image: string;
  purchaseDate: Date;
  totalAmount: number;
  rewardId?: string;
}
