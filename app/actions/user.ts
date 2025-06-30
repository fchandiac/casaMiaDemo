'use server';

import { User } from '@/types/user';

/**
 * Busca un usuario por su correo electrónico
 * @param email El correo electrónico del usuario
 * @returns El usuario encontrado o null si no existe
 */
export async function getUserByEmail(email: string): Promise<User | null> {
  try {
    // Esta es una implementación de ejemplo usando los usuarios hardcodeados
    // En una implementación real, se consultaría a una base de datos
    
    // Lista de usuarios de prueba
    const users: User[] = [
      { 
        id: 1, 
        email: 'admin@example.com', 
        name: 'Admin User', 
        role: 'admin',
        status: 'activo'
      },
      { 
        id: 2, 
        email: 'user@example.com', 
        name: 'Regular User', 
        role: 'user',
        status: 'activo'
      },
      { 
        id: 3, 
        email: 'operator@example.com', 
        name: 'Operator User', 
        role: 'operator',
        status: 'activo'
      }
    ];

    // Buscar el usuario por email
    const user = users.find(user => user.email === email);
    
    if (!user) {
      console.log(`Usuario no encontrado para el email: ${email}`);
      return null;
    }

    return user;
  } catch (error) {
    console.error('Error al buscar usuario por email:', error);
    return null;
  }
}
