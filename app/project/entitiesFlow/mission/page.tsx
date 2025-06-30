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

export default function MissionPage() {
  const attributes = [
    { name: 'id', type: 'string', description: 'Unique identifier for the mission' },
    { name: 'name', type: 'string', description: 'Mission name' },
    { name: 'type', type: 'string', description: 'Mission type' },
    { name: 'rewardId', type: 'string', description: 'ID of the reward for completing the mission' },
    { name: 'userId', type: 'string', description: 'ID of the user assigned to the mission' },
    { name: 'description', type: 'string', description: 'Mission description' },
    { name: 'startDate', type: 'Date', description: 'Mission start date' },
    { name: 'endDate', type: 'Date', description: 'Mission end date' },
    { name: 'frequency', type: 'string', description: 'Mission frequency' },
    { name: 'json', type: 'JSON', description: 'Additional mission configuration' },
    { name: 'image', type: 'string', description: 'Mission image URL or reference' }
  ];

  const relationships = [
    { entity: 'User', type: 'N:1', description: 'A mission belongs to a user' },
    { entity: 'Reward', type: '1:1', description: 'A mission has one reward' },
    { entity: 'Survey', type: 'extends', description: 'Survey is a type of mission' },
    { entity: 'Trivia', type: 'extends', description: 'Trivia is a type of mission' },
    { entity: 'LocationMission', type: 'extends', description: 'Location mission is a type of mission' },
    { entity: 'QRCodeMission', type: 'extends', description: 'QR code mission is a type of mission' },
    { entity: 'PurchaseMission', type: 'extends', description: 'Purchase mission is a type of mission' }
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
        Mission
      </Typography>

      <Typography variant="body1" paragraph sx={{ mb: 4 }}>
        Challenge that delivers reward when completed.
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
