// User and Profile related types
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'client' | 'operator';
  createdAt?: string;
  status?: 'activo' | 'inactivo';
}

export interface Usuario {
  id: string;
  name: string;
  mail: string;
  pass?: string; // Optional for security
  active: boolean;
  blocked: boolean;
  rolId: string;
}

export interface Perfil {
  id: string;
  usuarioID: string;
  userSegmentOptions: UserSegmentOptions[];
}

export interface Rol {
  id: string;
  nombre: string;
  tipo: string;
  permisos: string[];
}

export interface Segmento {
  id: string;
  nombre: string;
  jsonSegmentOptions: any; // JSON object
}

export interface SegmentOptions {
  id: string;
  nombre: string;
  tipo: 'multiple' | 'numeric' | 'text';
  jsonOpciones: any; // JSON object
  available: boolean;
}

export interface UserSegmentOptions {
  id: string;
  usuarioID: string;
  segmentOptionsID: string;
  texto?: string;
  opcionSeleccionada?: string;
}
  