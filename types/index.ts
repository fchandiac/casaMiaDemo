// Export all types from different modules
export * from './users';
export * from './reward';
export * from './product';
export * from './mission';
export * from './stores';

// Additional common types
export type Status = 'active' | 'inactive' | 'pending';
export type UserRole = 'admin' | 'client' | 'operator';
export type MissionType = 'encuesta' | 'trivia' | 'estoyEnCasaMia' | 'findQR' | 'buyProduct' | 'calificaProducto';
export type RewardType = 'dinero' | 'producto' | 'descuento' | 'insignia';
export type TransactionType = 'credito' | 'debito';
export type NotificationType = 'sistema' | 'promocion' | 'mision' | 'recompensa';
