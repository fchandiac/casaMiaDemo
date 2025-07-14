import { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

/**
 * Usuarios de prueba para el sistema
 * Estos usuarios están disponibles para desarrollo y pruebas
 * En un entorno de producción, estos usuarios deberían ser reemplazados
 * por una autenticación real contra una base de datos o servicio externo
 * 
 * - Admin: admin@casamia.com / admin123
 * - Cliente: cliente@casamia.com / cliente123
 * - Operador: operador@casamia.com / operador123
 */
const testUsers = [
  {
    id: "1",
    email: "admin@casamia.com",
    password: "admin123",
    role: "admin"
  },
  {
    id: "2",
    email: "cliente@casamia.com",
    password: "cliente123",
    role: "client"
  },
  {
    id: "3",
    email: "operador@casamia.com",
    password: "operador123",
    role: "operator"
  }
];

export default {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials;

        // En un entorno de producción, aquí conectarías con tu backend
        // Por ahora, usamos usuarios de prueba
        const user = testUsers.find(
          (user) => user.email === email && user.password === password
        );

        if (!user) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
} satisfies NextAuthConfig;
