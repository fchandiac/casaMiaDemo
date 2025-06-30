// Mission related types
export interface Mission {
  id: string;
  nombre: string;
  tipo: 'encuesta' | 'trivia' | 'estoyEnCasaMia' | 'findQR' | 'buyProduct' | 'calificaProducto';
  id_recompensa: string;
  id_usuario: string;
  descripcion: string;
  fechaInicio: Date;
  fechaFin: Date;
  frecuencia: string;
  json: any; // Mission-specific data
  imagen: string;
}

export interface Encuesta {
  id: string;
  preguntas: string[];
  opciones: string[][];
  respuestaCorrecta: string[];
}

export interface Trivia {
  id: string;
  preguntas: string[];
  opciones: string[][];
  respuestaCorrecta: string[];
}

export interface EstoyEnCasaMia {
  id: string;
  localID: string;
  nombre: string;
  descripcion: string;
  lat: number;
  long: number;
  radio: number;
}

export interface FindQRCode {
  id: string;
  codigo: string;
  localID: string;
}

export interface BuyProduct {
  id: string;
  productoID: string;
  nombre: string;
  descripcion: string;
  fecha: Date;
  usuarioID: string;
}

export interface CalificaProducto {
  productoID: string;
  usuarioID: string;
  calificacion: number;
  comentario: string;
  fecha: Date;
}
