// Missions related types
export interface Mission {
  id: string;
  name: string;
  type: string;
  rewardId: string;
  userId: string;
  description: string;
  startDate: Date;
  endDate: Date;
  frequency: string;
  json: any; // JSON object
  image: string;
}

export interface Survey {
  id: string;
  questions: string[];
  options: string[];
  correctAnswer?: string;
}

export interface Trivia {
  id: string;
  questions: string[];
  options: string[];
  correctAnswer: string;
}

export interface LocationMission {
  id: string;
  storeId: string;
  name: string;
  description: string;
  latitude: number;
  longitude: number;
  radius: number;
}

export interface QRCodeMission {
  id: string;
  code: string;
  storeId: string;
}

export interface PurchaseMission {
  id: string;
  productId: string;
  name: string;
  description: string;
  date: Date;
  userId: string;
}

export interface MenuScan {
  id: string;
  date: Date;
  latitude: number;
  longitude: number;
  storeId: string;
}
