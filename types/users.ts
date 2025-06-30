// User and Profile related types
export interface User {
  id: string;
  name: string;
  email: string;
  password?: string; // Optional for security
  active: boolean;
  blocked: boolean;
  roleId: string;
}

export interface Profile {
  id: string;
  userId: string;
  userSegmentOptions: UserSegmentOption[];
}

export interface Role {
  id: string;
  name: string;
  type: string;
  permissions: string[];
}

export interface Segment {
  id: string;
  name: string;
  jsonSegmentOptions: any; // JSON object
}

export interface SegmentOption {
  id: string;
  name: string;
  type: 'multiple' | 'numeric' | 'text';
  jsonOptions: any; // JSON object
  available: boolean;
}

export interface UserSegmentOption {
  id: string;
  userId: string;
  segmentOptionId: string;
  text?: string;
  selectedOption?: string;
}

export interface Wallet {
  id: string;
  userId: string;
  currentBalance: number;
  previousBalance: number;
}

export interface WalletMovement {
  id: string;
  userId: string;
  type: string;
  previousBalance: number;
  posteriorBalance: number;
  walletId: string;
  reward: number;
}

export interface Badge {
  id: string;
  image: string;
  expirationDate?: Date;
  benefit: string;
  userId: string;
}

export interface Notification {
  id: string;
  userId: string;
  type: string;
  title: string;
  message: string;
  sentDate: Date;
  read: boolean;
}
