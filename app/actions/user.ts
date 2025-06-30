'use server';

import { User } from '@/types/users';

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
        id: "1", 
        email: 'admin@example.com', 
        name: 'Admin User', 
        active: true,
        blocked: false,
        roleId: 'admin'
      },
      { 
        id: "2", 
        email: 'user@example.com', 
        name: 'Regular User', 
        active: true,
        blocked: false,
        roleId: 'user'
      },
      { 
        id: "3", 
        email: 'operator@example.com', 
        name: 'Operator User', 
        active: true,
        blocked: false,
        roleId: 'operator'
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

/**
 * Busca un usuario por su ID
 * @param id El ID del usuario
 * @returns El usuario encontrado o null si no existe
 */
export async function getUserById(id: string): Promise<User | null> {
  // Mock: busca usuario por id en la lista hardcodeada
  const users: User[] = [
    { id: "1", email: 'admin@example.com', name: 'Admin User', active: true, blocked: false, roleId: 'admin' },
    { id: "2", email: 'user@example.com', name: 'Regular User', active: true, blocked: false, roleId: 'user' },
    { id: "3", email: 'operator@example.com', name: 'Operator User', active: true, blocked: false, roleId: 'operator' }
  ];
  return users.find(user => user.id === id) || null;
}

/**
 * Actualiza la contraseña de un usuario
 * @param id El ID del usuario
 * @param newPassword La nueva contraseña
 * @returns Verdadero si la actualización fue exitosa, falso en caso contrario
 */
export async function updateUserPassword(id: string, newPassword: string): Promise<boolean> {
  // Mock: simula actualización exitosa
  return true;
}
