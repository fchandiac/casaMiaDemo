'use client';

import React from 'react';
import { 
  Box, 
  Container
} from '@mui/material';
import { ClientHeader, ClientBottomBar } from '@/components/client';

export default function StorePage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f5f5f5' }}>
      <ClientHeader />
      
      <Box 
        sx={{ 
          mt: '60px',  // Altura del header
          mb: '60px',  // Altura del footer
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          position: 'relative'
        }}
      >
        <iframe 
          src="https://menu.fu.do/casamiaparral" 
          title="CasaMia Parral Menu"
          width="100%"
          height="100%"
          style={{ 
            border: 'none', 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        />
      </Box>
      
      <ClientBottomBar />
    </Box>
  );
}
