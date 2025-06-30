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

export default function ProductPage() {
  const attributes = [
    { name: 'id', type: 'string', description: 'Unique identifier for the product' },
    { name: 'name', type: 'string', description: 'Product name' },
    { name: 'description', type: 'string', description: 'Detailed product description' },
    { name: 'category', type: 'string', description: 'Product category' },
    { name: 'image', type: 'string', description: 'Product image URL or reference' },
    { name: 'active', type: 'boolean', description: 'Whether the product is active' }
  ];

  const relationships = [
    { entity: 'Image', type: '1:N', description: 'A product can have multiple images' },
    { entity: 'CollectionCard', type: '1:N', description: 'A product can be in multiple collection cards' },
    { entity: 'PurchaseMission', type: '1:N', description: 'A product can be target of multiple purchase missions' },
    { entity: 'ProductRating', type: '1:N', description: 'A product can have multiple ratings' },
    { entity: 'Reward', type: '1:N', description: 'A product can be a reward' }
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
        Product
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Element used in missions, not necessarily sold.
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
