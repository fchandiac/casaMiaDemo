/**
 * Este archivo contiene ejemplos de datos para cada tipo de misión.
 * Sirve como referencia para desarrolladores sobre cómo estructurar los datos
 * para usar con los diferentes componentes de misión.
 */

import { Mission } from '@/types/mission';

/**
 * Misión tipo Encuesta (Survey)
 */
export const surveyMissionExample: Mission = {
  id: "survey-example",
  name: "Encuesta de Satisfacción",
  type: "survey",
  rewardId: "reward-123",
  userId: "user-456",
  description: "Completa esta breve encuesta sobre tu experiencia en CasaMia",
  startDate: new Date(),
  endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 días de duración
  frequency: "once",
  image: "/images/survey-mission.jpg",
  json: {
    questions: [
      {
        id: "q1",
        text: "¿Con qué frecuencia visitas CasaMia?",
        options: [
          { id: "o1", text: "Diariamente" },
          { id: "o2", text: "Varias veces por semana" },
          { id: "o3", text: "Semanalmente" },
          { id: "o4", text: "Mensualmente" }
        ]
      },
      {
        id: "q2",
        text: "¿Qué producto te gustaría ver en nuestro menú?",
        options: [
          { id: "o5", text: "Más variedades de café" },
          { id: "o6", text: "Opciones veganas" },
          { id: "o7", text: "Postres sin azúcar" },
          { id: "o8", text: "Sándwiches gourmet" }
        ]
      }
    ]
  }
};

/**
 * Misión tipo Trivia
 */
export const triviaMissionExample: Mission = {
  id: "trivia-example",
  name: "Trivia del Café",
  type: "trivia",
  rewardId: "reward-124",
  userId: "user-456",
  description: "Demuestra cuánto sabes sobre el mundo del café",
  startDate: new Date(),
  endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 días de duración
  frequency: "once",
  image: "/images/trivia-mission.jpg",
  json: {
    questions: [
      {
        id: "q1",
        text: "¿De qué país es originario el café?",
        options: [
          { id: "o1", text: "Brasil" },
          { id: "o2", text: "Colombia" },
          { id: "o3", text: "Etiopía" },
          { id: "o4", text: "Vietnam" }
        ],
        correctAnswerId: "o3"
      },
      {
        id: "q2",
        text: "¿Cuál de estos NO es un método de preparación de café?",
        options: [
          { id: "o5", text: "Prensa francesa" },
          { id: "o6", text: "Pour over" },
          { id: "o7", text: "Método catalán" },
          { id: "o8", text: "Chemex" }
        ],
        correctAnswerId: "o7"
      }
    ]
  }
};

/**
 * Misión tipo Estoy en CasaMia (Location)
 */
export const locationMissionExample: Mission = {
  id: "location-example",
  name: "Visita Matutina",
  type: "location",
  rewardId: "reward-125",
  userId: "user-456",
  description: "Visita CasaMia antes de las 10:00 AM",
  startDate: new Date(),
  endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 días de duración
  frequency: "daily",
  image: "/images/location-mission.jpg",
  json: {
    storeName: "CasaMia Centro",
    storeAddress: "Av. Principal 123, Centro Comercial",
    latitude: -33.4489,
    longitude: -70.6693,
    radius: 100, // Radio en metros
    requiredTimeOfDay: "morning", // morning, afternoon, evening, anytime
    startHour: 8, // 8:00 AM
    endHour: 10 // 10:00 AM
  }
};

/**
 * Misión tipo Encontrar QR (QRCode)
 */
export const qrcodeMissionExample: Mission = {
  id: "qrcode-example",
  name: "Código Secreto",
  type: "qrcode",
  rewardId: "reward-126",
  userId: "user-456",
  description: "Encuentra y escanea el código QR secreto en nuestra tienda",
  startDate: new Date(),
  endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 días de duración
  frequency: "once",
  image: "/images/qrcode-mission.jpg",
  json: {
    storeName: "CasaMia Centro",
    storeAddress: "Av. Principal 123, Centro Comercial",
    validCode: "CASAMIA2025SECRET", // Código que debe contener el QR para ser válido
    hint: "Busca cerca de donde brillan las estrellas" // Pista para encontrar el QR
  }
};

/**
 * Misión tipo Comprar Producto (Purchase)
 */
export const purchaseMissionExample: Mission = {
  id: "purchase-example",
  name: "Prueba Nuestro Nuevo Blend",
  type: "purchase",
  rewardId: "reward-127",
  userId: "user-456",
  description: "Compra una taza de nuestro nuevo blend de café colombiano",
  startDate: new Date(),
  endDate: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000), // 60 días de duración
  frequency: "once",
  image: "/images/purchase-mission.jpg",
  json: {
    productId: "prod-789",
    productName: "Blend Colombiano Premium",
    productDescription: "Café de origen colombiano, tostado medio, notas de chocolate y frutos rojos",
    productImage: "/images/colombian-blend.jpg",
    productPrice: 3500,
    requiredQuantity: 1
  }
};

/**
 * Misión tipo Calificar Producto (ProductRating)
 */
export const productRatingMissionExample: Mission = {
  id: "rating-example",
  name: "Califica Nuestro Croissant",
  type: "productrating",
  rewardId: "reward-128",
  userId: "user-456",
  description: "Prueba y califica nuestro croissant de almendras",
  startDate: new Date(),
  endDate: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000), // 45 días de duración
  frequency: "once",
  image: "/images/rating-mission.jpg",
  json: {
    productId: "prod-456",
    productName: "Croissant de Almendras",
    productDescription: "Croissant artesanal relleno de crema de almendras y cubierto con almendras laminadas",
    productImage: "/images/almond-croissant.jpg",
    minRating: 1, // Calificación mínima (1-5)
    requireComment: true, // Requiere comentario obligatorio
    commentMinLength: 20 // Longitud mínima del comentario
  }
};

/**
 * Colección de ejemplos de misiones
 */
export const missionExamples = {
  survey: surveyMissionExample,
  trivia: triviaMissionExample,
  location: locationMissionExample,
  qrcode: qrcodeMissionExample,
  purchase: purchaseMissionExample,
  productrating: productRatingMissionExample
};

export default missionExamples;
