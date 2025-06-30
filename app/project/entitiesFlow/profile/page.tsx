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

export default function ProfilePage() {
  const attributes = [
    { name: 'id', type: 'string', description: 'Unique identifier for the profile' },
    { name: 'userId', type: 'string', description: 'ID of the user who owns the profile' },
    { name: 'userSegmentOptions', type: 'JSON', description: 'Set of user segmentation options' }
  ];

  const relationships = [
    { entity: 'User', type: '1:1', description: 'A profile belongs to a specific user' },
    { entity: 'UserSegmentOption', type: '1:N', description: 'A profile can have multiple segmentation options' },
    { entity: 'Segment', type: 'N:M', description: 'A profile can belong to multiple segments' }
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
        Profile
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Composed of multiple segmentation options. Defines groups with lists, checkboxes, or numeric values.
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
