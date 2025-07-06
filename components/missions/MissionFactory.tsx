import React from 'react';
import { Mission } from '@/types/mission';
import { MissionType } from './MissionInterfaces';
import BaseMissionComponent from './BaseMissionComponent';
import SurveyMissionComponent from './survey/SurveyMissionComponent';
import TriviaMissionComponent from './trivia/TriviaMissionComponent';
import LocationMissionComponent from './location/LocationMissionComponent';
import QRCodeMissionComponent from './qrcode/QRCodeMissionComponent';
import PurchaseMissionComponent from './purchase/PurchaseMissionComponent';
import ProductRatingComponent from './productrating/ProductRatingComponent';

interface MissionFactoryProps {
  mission: Mission;
  onComplete: (missionId: string) => void;
  onCancel?: () => void;
  isCompleted?: boolean;
  // Si es true, usará el DialogMissionComponent en lugar del BaseMissionComponent
  inDialog?: boolean;
  // Estas props adicionales podrían pasar datos necesarios para cada tipo de misión
  additionalProps?: any;
}

/**
 * Componente Factory para Misiones
 * 
 * Este componente determina qué tipo de componente de misión renderizar
 * basado en el tipo de misión proporcionado.
 */
const MissionFactory: React.FC<MissionFactoryProps> = ({
  mission,
  onComplete,
  onCancel,
  isCompleted = false,
  inDialog = false,
  additionalProps = {}
}) => {
  // Transformar el tipo de misión al enum correspondiente
  const getMissionTypeFromString = (type: string): MissionType => {
    // Convertir el string a minúsculas y quitar espacios
    const normalizedType = type.toLowerCase().replace(/\s+/g, '');
    
    switch (normalizedType) {
      case 'encuesta':
      case 'survey':
        return MissionType.SURVEY;
      case 'trivia':
        return MissionType.TRIVIA;
      case 'estoyencasamia':
      case 'location':
      case 'gps':
        return MissionType.LOCATION;
      case 'encontrarqr':
      case 'findqr':
      case 'qrcode':
        return MissionType.QR_CODE;
      case 'comprarproducto':
      case 'purchase':
      case 'buy':
        return MissionType.PURCHASE;
      case 'calificarproducto':
      case 'rating':
      case 'productrating':
        return MissionType.PRODUCT_RATING;
      default:
        console.warn(`Tipo de misión desconocido: ${type}. Usando Survey como fallback.`);
        return MissionType.SURVEY;
    }
  };

  // Obtener los datos específicos de la misión del JSON
  const missionData = mission.json || {};
  const missionType = getMissionTypeFromString(mission.type);
  
  // Props básicas para todos los componentes de misión
  const baseProps = {
    mission,
    onComplete,
    onCancel,
    isCompleted,
    hideHeader: inDialog, // Ocultar el encabezado cuando se usa en un diálogo
    inDialog, // Pasar la información de si está en un diálogo
    ...additionalProps
  };

  switch (missionType) {
    case MissionType.SURVEY:
      return (
        <SurveyMissionComponent
          {...baseProps}
          questions={missionData.questions || []}
          onSubmitAnswers={(answers) => {
            console.log('Respuestas de encuesta:', answers);
            // Aquí iría la lógica para enviar las respuestas al servidor
          }}
        />
      );
      
    case MissionType.TRIVIA:
      return (
        <TriviaMissionComponent
          {...baseProps}
          questions={missionData.questions || []}
          onSubmitAnswers={(answers) => {
            console.log('Respuestas de trivia:', answers);
            // Aquí iría la lógica para validar respuestas y otorgar premio
          }}
        />
      );
      
    case MissionType.LOCATION:
      return (
        <LocationMissionComponent
          {...baseProps}
          storeLocation={{
            name: missionData.storeName || 'CasaMia',
            address: missionData.storeAddress || 'Dirección de la tienda',
            latitude: missionData.latitude || 0,
            longitude: missionData.longitude || 0,
            radius: missionData.radius || 100 // Radio en metros
          }}
          onVerifyLocation={() => {
            console.log('Verificando ubicación...');
            // Aquí iría la lógica para verificar la ubicación GPS
          }}
        />
      );
      
    case MissionType.QR_CODE:
      return (
        <QRCodeMissionComponent
          {...baseProps}
          storeInfo={{
            name: missionData.storeName || 'CasaMia',
            address: missionData.storeAddress || 'Dirección de la tienda'
          }}
          onScanQR={(qrData) => {
            console.log('QR escaneado:', qrData);
            // Aquí iría la lógica para validar el código QR
          }}
        />
      );
      
    case MissionType.PURCHASE:
      return (
        <PurchaseMissionComponent
          {...baseProps}
          product={{
            id: missionData.productId || '',
            name: missionData.productName || 'Producto',
            description: missionData.productDescription || 'Descripción del producto',
            imageUrl: missionData.productImage || undefined
          }}
          onScanReceipt={(receiptData) => {
            console.log('Boleta escaneada:', receiptData);
            // Aquí iría la lógica para validar la compra
          }}
        />
      );
      
    case MissionType.PRODUCT_RATING:
      return (
        <ProductRatingComponent
          {...baseProps}
          product={{
            id: missionData.productId || '',
            name: missionData.productName || 'Producto',
            description: missionData.productDescription || 'Descripción del producto',
            imageUrl: missionData.productImage || undefined
          }}
          onSubmitRating={(rating, comment) => {
            console.log('Calificación:', rating, 'Comentario:', comment);
            // Aquí iría la lógica para guardar la calificación
          }}
        />
      );
      
    default:
      console.error(`No se encontró un componente para el tipo de misión: ${mission.type}`);
      return null;
  }
};

export default MissionFactory;
