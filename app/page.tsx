'use client';

import LoginForm from '@/components/auth/LoginForm';
import { Box } from '@mui/material';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      const email = session.user?.email;
      if (email === 'admin@casamia.com') {
        router.push('/admin');
      } else if (email === 'cliente@casamia.com') {
        router.push('/client');
      } else if (email === 'operador@casamia.com') {
        router.push('/operator');
      }
    }
  }, [session, router]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <LoginForm />
    </Box>
  );
}
