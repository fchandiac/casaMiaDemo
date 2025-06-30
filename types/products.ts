// Product and collection related types
export interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  categoria: string;
  imagen: string;
  activo: boolean;
}

export interface Imagen {
  id: string;
  url: string;
  referenceID: string;
  tipoRef: string;
}

export interface TarjetaColeccion {
  id: string;
  usuarioID: string;
  meta: number;
  fechaEmision: Date;
  fechaExpiracion: Date;
  current: number;
  productoID: string;
  nombre: string;
  imagen: string;
  id_recompensa: string;
}
