'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { User } from '@/types/users';

// Mock implementation of getUserByEmail since we can't access the server actions
const mockGetUserByEmail = async (email: string): Promise<User | null> => {
  // Mock data that matches the structure in app/actions/user.ts
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

  return users.find(user => user.email === email) || null;
};

export const useUser = () => {
  const { data: session, status } = useSession(); // status: "loading" | "authenticated" | "unauthenticated"
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      if (status === 'loading') return;

      if (session?.user?.email) {
        // Primero intentamos usar la sesión directamente
        const basicUser: User = {
          email: session.user.email,
          name: session.user.name ?? '',
          id: "0",
          active: true,
          blocked: false,
          roleId: 'user'
        };

        setUser(basicUser);

        try {
          // Si necesitas más datos (rol, config, etc), los traes
          const dbUser = await mockGetUserByEmail(session.user.email);
          if (dbUser) setUser(dbUser);
        } catch (error) {
          console.error('Error cargando usuario desde DB:', error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    loadUser();
  }, [session, status]);

  return {
    user,
    setUser,
    loading,
    setLoading,
    refreshUser: async () => {
      if (session?.user?.email) {
        const refreshed = await mockGetUserByEmail(session.user.email);
        if (refreshed) setUser(refreshed);
      }
    },
  };
};
