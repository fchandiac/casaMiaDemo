// Store and transaction related types
export interface Tienda {
  id: string;
  nombre: string;
  direccion: string;
  latitud: number;
  longitud: number;
}

export interface MenuScan {
  id: string;
  date: Date;
  lat: number;
  lon: number;
  storeID: string;
}

export interface Boleta {
  id: string;
  usuarioID: string;
  imagen: string;
  fechaCompra: Date;
  montoTotal: number;
  id_recompensa: string;
}

export interface Notificacion {
  id: string;
  usuarioID: string;
  tipo: 'sistema' | 'promocion' | 'mision' | 'recompensa';
  titulo: string;
  mensaje: string;
  fechaEnvio: Date;
  leida: boolean;
}
