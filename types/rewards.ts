// Financial and reward related types
export interface Billetera {
  id: string;
  usuarioID: string;
  saldoActual: number;
  saldoAnterior: number;
}

export interface MovimientosBilletera {
  id: string;
  usuarioID: string;
  tipo: 'credito' | 'debito';
  saldoPrevio: number;
  saldoPosterior: number;
  billeteraID: string;
  recompensa: string;
}

export interface Recompensa {
  id: string;
  tipo: 'dinero' | 'producto' | 'descuento' | 'insignia';
  fechaValidez: Date;
  valor: number;
  id_producto?: string;
  estado: 'disponible' | 'canjeado' | 'expirado';
  id_insigniaID?: string;
}

export interface Insignia {
  id: string;
  imagen: string;
  fechaExpiración?: Date;
  beneficio: string;
  userID: string;
}
