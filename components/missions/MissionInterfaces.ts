import { Mission } from '@/types/mission';

/**
 * Interfaz base para todas las misiones
 * Define propiedades comunes que necesitarán todos los componentes de misión
 */
export interface MissionComponentProps {
  mission: Mission;
  onComplete: (missionId: string) => void;
  onCancel?: () => void;
  isCompleted?: boolean;
}

/**
 * Interfaz para las misiones de tipo Encuesta
 */
export interface SurveyMissionProps extends MissionComponentProps {
  questions: Array<{
    id: string;
    text: string;
    options: Array<{
      id: string;
      text: string;
    }>;
  }>;
  onSubmitAnswers: (answers: Record<string, string>) => void;
}

/**
 * Interfaz para las misiones de tipo Trivia
 */
export interface TriviaMissionProps extends MissionComponentProps {
  questions: Array<{
    id: string;
    text: string;
    options: Array<{
      id: string;
      text: string;
    }>;
    correctAnswerId: string;
  }>;
  onSubmitAnswers: (answers: Record<string, string>) => void;
}

/**
 * Interfaz para las misiones de tipo Estoy en CasaMia (GPS)
 */
export interface LocationMissionProps extends MissionComponentProps {
  storeLocation: {
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    radius: number; // Radio en metros para validar la presencia
  };
  onVerifyLocation: () => void;
}

/**
 * Interfaz para las misiones de tipo Encontrar QR
 */
export interface QRCodeMissionProps extends MissionComponentProps {
  storeInfo: {
    name: string;
    address: string;
  };
  onScanQR: (qrData: string) => void;
}

/**
 * Interfaz para las misiones de tipo Comprar Producto
 */
export interface PurchaseMissionProps extends MissionComponentProps {
  product: {
    id: string;
    name: string;
    description: string;
    imageUrl?: string;
  };
  onScanReceipt: (receiptData: string) => void;
}

/**
 * Interfaz para las misiones de tipo Calificar Producto
 */
export interface ProductRatingMissionProps extends MissionComponentProps {
  product: {
    id: string;
    name: string;
    description: string;
    imageUrl?: string;
  };
  onSubmitRating: (rating: number, comment: string) => void;
}

/**
 * Tipo unión para cualquier tipo de props de misión
 */
export type AnyMissionProps = 
  | SurveyMissionProps 
  | TriviaMissionProps 
  | LocationMissionProps
  | QRCodeMissionProps
  | PurchaseMissionProps
  | ProductRatingMissionProps;

/**
 * Enumeración para los tipos de misiones
 */
export enum MissionType {
  SURVEY = 'survey',
  TRIVIA = 'trivia',
  LOCATION = 'location',
  QR_CODE = 'qrcode',
  PURCHASE = 'purchase',
  PRODUCT_RATING = 'productrating'
}
