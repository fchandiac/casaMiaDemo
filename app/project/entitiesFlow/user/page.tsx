import React from 'react';
import {
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container,
  Box,
  Button
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import Link from 'next/link';

export default function UserPage() {
  const attributes = [
    { name: 'id', type: 'string', description: 'Unique identifier for the user' },
    { name: 'name', type: 'string', description: 'User\'s full name' },
    { name: 'email', type: 'string', description: 'User\'s email address' },
    { name: 'password', type: 'string', description: 'User\'s encrypted password' },
    { name: 'active', type: 'boolean', description: 'Whether the user account is active' },
    { name: 'blocked', type: 'boolean', description: 'Whether the user account is blocked' },
    { name: 'roleId', type: 'string', description: 'ID of the user\'s role' }
  ];

  const relationships = [
    { entity: 'Role', type: 'N:1', description: 'A user belongs to one role' },
    { entity: 'Profile', type: '1:1', description: 'A user has one profile' },
    { entity: 'Wallet', type: '1:1', description: 'A user has one wallet' },
    { entity: 'Mission', type: '1:N', description: 'A user can have multiple missions' },
    { entity: 'Badge', type: '1:N', description: 'A user can have multiple badges' },
    { entity: 'Notification', type: '1:N', description: 'A user can receive multiple notifications' }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 3 }}>
        <Link href="/project/entitiesFlow" passHref>
          <Button startIcon={<ArrowBack />} variant="outlined">
            Back to Diagram
          </Button>
        </Link>
      </Box>

      <Typography variant="h3" component="h1" gutterBottom>
        User
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Represents a person who uses the application and interacts with the interface. Can have roles such as client, operator, or administrator.
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Attributes
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Name</strong></TableCell>
                <TableCell><strong>Type</strong></TableCell>
                <TableCell><strong>Description</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {attributes.map((attr) => (
                <TableRow key={attr.name}>
                  <TableCell>{attr.name}</TableCell>
                  <TableCell>{attr.type}</TableCell>
                  <TableCell>{attr.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Relationships
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Entity</strong></TableCell>
                <TableCell><strong>Type</strong></TableCell>
                <TableCell><strong>Description</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {relationships.map((rel, index) => (
                <TableRow key={index}>
                  <TableCell>{rel.entity}</TableCell>
                  <TableCell>{rel.type}</TableCell>
                  <TableCell>{rel.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}
