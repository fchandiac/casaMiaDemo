/**
 * Utilidades para trabajar con misiones
 * Este módulo contiene funciones para convertir entre diferentes formatos de datos de misiones
 */
import { Mission } from '@/types/mission';
import { MissionType } from './MissionInterfaces';
import missionExamples from './examples/MissionDataExamples';

/**
 * Interfaz para el formato simplificado de misión usado en las listas
 */
export interface SimpleMission {
  id: string;
  title: string;
  description: string;
  reward: string;
  imageEmoji?: string;
  type: string;
}

/**
 * Convierte un tipo de misión en formato string al enum MissionType
 */
export const getMissionTypeFromString = (type: string): MissionType => {
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

/**
 * Convierte una misión simplificada a un objeto Mission completo
 * Usa los ejemplos como plantilla para los datos específicos del tipo
 */
export const simpleMissionToFull = (mission: SimpleMission): Mission => {
  // Obtener el tipo de la misión
  const missionType = mission.type as keyof typeof missionExamples;
  
  // Si no existe un ejemplo para este tipo, usar el primer ejemplo disponible
  const templateMission = missionExamples[missionType] || 
                        Object.values(missionExamples)[0];
  
  // Crear una nueva misión basada en la plantilla pero con los datos específicos
  return {
    ...templateMission, // Usar la estructura y datos por defecto del ejemplo
    id: mission.id,
    name: mission.title,
    description: mission.description,
    // Mantener el tipo original
    type: mission.type
  };
};

/**
 * Convierte un objeto Mission completo a formato simplificado
 */
export const fullMissionToSimple = (mission: Mission): SimpleMission => {
  return {
    id: mission.id,
    title: mission.name,
    description: mission.description,
    reward: mission.json?.reward || "$0", // Valor por defecto si no existe
    type: mission.type,
    imageEmoji: getMissionEmoji(mission.type)
  };
};

/**
 * Obtiene un emoji representativo para cada tipo de misión
 */
export const getMissionEmoji = (type: string): string => {
  const missionType = getMissionTypeFromString(type);
  
  switch (missionType) {
    case MissionType.SURVEY:
      return "📝";
    case MissionType.TRIVIA:
      return "🧠";
    case MissionType.LOCATION:
      return "📍";
    case MissionType.QR_CODE:
      return "🔍";
    case MissionType.PURCHASE:
      return "🛒";
    case MissionType.PRODUCT_RATING:
      return "⭐";
    default:
      return "🎯";
  }
};

export default {
  getMissionTypeFromString,
  simpleMissionToFull,
  fullMissionToSimple,
  getMissionEmoji
};
