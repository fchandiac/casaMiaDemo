'use client';

import React, { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  BackgroundVariant,
} from 'reactflow';

import 'reactflow/dist/style.css';

// Nodos representando las entidades principales
const initialNodes = [
  // Core User Entities
  {
    id: 'usuario',
    position: { x: 250, y: 50 },
    data: { label: 'Usuario' },
    style: { backgroundColor: '#e3f2fd', border: '2px solid #1976d2' },
  },
  {
    id: 'perfil',
    position: { x: 100, y: 150 },
    data: { label: 'Perfil' },
    style: { backgroundColor: '#f3e5f5', border: '2px solid #7b1fa2' },
  },
  {
    id: 'rol',
    position: { x: 400, y: 150 },
    data: { label: 'Rol' },
    style: { backgroundColor: '#fff3e0', border: '2px solid #f57c00' },
  },
  
  // Segmentation
  {
    id: 'segmento',
    position: { x: 50, y: 250 },
    data: { label: 'Segmento' },
    style: { backgroundColor: '#e8f5e8', border: '2px solid #388e3c' },
  },
  {
    id: 'segmentOptions',
    position: { x: 200, y: 250 },
    data: { label: 'SegmentOptions' },
    style: { backgroundColor: '#e8f5e8', border: '2px solid #388e3c' },
  },
  
  // Financial
  {
    id: 'billetera',
    position: { x: 450, y: 250 },
    data: { label: 'Billetera' },
    style: { backgroundColor: '#fff8e1', border: '2px solid #fbc02d' },
  },
  {
    id: 'movimientos',
    position: { x: 600, y: 250 },
    data: { label: 'MovimientosBilletera' },
    style: { backgroundColor: '#fff8e1', border: '2px solid #fbc02d' },
  },
  
  // Products & Collection
  {
    id: 'producto',
    position: { x: 100, y: 400 },
    data: { label: 'Producto' },
    style: { backgroundColor: '#fce4ec', border: '2px solid #c2185b' },
  },
  {
    id: 'tarjetaColeccion',
    position: { x: 300, y: 400 },
    data: { label: 'TarjetaColección' },
    style: { backgroundColor: '#fce4ec', border: '2px solid #c2185b' },
  },
  {
    id: 'imagen',
    position: { x: 500, y: 400 },
    data: { label: 'Imagen' },
    style: { backgroundColor: '#f1f8e9', border: '2px solid #689f38' },
  },
  
  // Missions & Rewards
  {
    id: 'mision',
    position: { x: 150, y: 550 },
    data: { label: 'Misión' },
    style: { backgroundColor: '#e0f2f1', border: '2px solid #00796b' },
  },
  {
    id: 'recompensa',
    position: { x: 350, y: 550 },
    data: { label: 'Recompensa' },
    style: { backgroundColor: '#fff3e0', border: '2px solid #ef6c00' },
  },
  {
    id: 'insignia',
    position: { x: 550, y: 550 },
    data: { label: 'Insignia' },
    style: { backgroundColor: '#fce4ec', border: '2px solid #ad1457' },
  },
  
  // Mission Types
  {
    id: 'encuesta',
    position: { x: 50, y: 700 },
    data: { label: 'Encuesta' },
    style: { backgroundColor: '#e8eaf6', border: '2px solid #3f51b5' },
  },
  {
    id: 'trivia',
    position: { x: 180, y: 700 },
    data: { label: 'Trivia' },
    style: { backgroundColor: '#e8eaf6', border: '2px solid #3f51b5' },
  },
  {
    id: 'estoyEnCasaMia',
    position: { x: 310, y: 700 },
    data: { label: 'EstoyEnCasaMia' },
    style: { backgroundColor: '#e8eaf6', border: '2px solid #3f51b5' },
  },
  {
    id: 'findQR',
    position: { x: 480, y: 700 },
    data: { label: 'FindQRCode' },
    style: { backgroundColor: '#e8eaf6', border: '2px solid #3f51b5' },
  },
  
  // Store & Transactions
  {
    id: 'tienda',
    position: { x: 700, y: 400 },
    data: { label: 'Tienda' },
    style: { backgroundColor: '#efebe9', border: '2px solid #5d4037' },
  },
  {
    id: 'boleta',
    position: { x: 700, y: 550 },
    data: { label: 'Boleta' },
    style: { backgroundColor: '#efebe9', border: '2px solid #5d4037' },
  },
  {
    id: 'menuScan',
    position: { x: 700, y: 700 },
    data: { label: 'MenuScan' },
    style: { backgroundColor: '#efebe9', border: '2px solid #5d4037' },
  },
  
  // Notifications
  {
    id: 'notificacion',
    position: { x: 850, y: 150 },
    data: { label: 'Notificación' },
    style: { backgroundColor: '#fff', border: '2px solid #616161' },
  },
];

// Relaciones entre entidades
const initialEdges = [
  // Usuario como centro
  { id: 'usuario-perfil', source: 'usuario', target: 'perfil', label: '1:1' },
  { id: 'usuario-rol', source: 'usuario', target: 'rol', label: 'N:1' },
  { id: 'usuario-billetera', source: 'usuario', target: 'billetera', label: '1:1' },
  { id: 'usuario-notificacion', source: 'usuario', target: 'notificacion', label: '1:N' },
  
  // Perfil y Segmentación
  { id: 'perfil-segmentOptions', source: 'perfil', target: 'segmentOptions', label: '1:N' },
  { id: 'segmentOptions-segmento', source: 'segmentOptions', target: 'segmento', label: 'N:N' },
  
  // Billetera y Movimientos
  { id: 'billetera-movimientos', source: 'billetera', target: 'movimientos', label: '1:N' },
  { id: 'movimientos-recompensa', source: 'movimientos', target: 'recompensa', label: 'N:1' },
  
  // Productos y Colecciones
  { id: 'producto-tarjetaColeccion', source: 'producto', target: 'tarjetaColeccion', label: '1:N' },
  { id: 'usuario-tarjetaColeccion', source: 'usuario', target: 'tarjetaColeccion', label: '1:N' },
  { id: 'producto-imagen', source: 'producto', target: 'imagen', label: '1:N' },
  
  // Misiones y Recompensas
  { id: 'usuario-mision', source: 'usuario', target: 'mision', label: '1:N' },
  { id: 'mision-recompensa', source: 'mision', target: 'recompensa', label: '1:1' },
  { id: 'recompensa-insignia', source: 'recompensa', target: 'insignia', label: '1:1' },
  { id: 'recompensa-producto', source: 'recompensa', target: 'producto', label: 'N:1' },
  
  // Tipos de Misiones
  { id: 'mision-encuesta', source: 'mision', target: 'encuesta', label: 'extends' },
  { id: 'mision-trivia', source: 'mision', target: 'trivia', label: 'extends' },
  { id: 'mision-estoyEnCasaMia', source: 'mision', target: 'estoyEnCasaMia', label: 'extends' },
  { id: 'mision-findQR', source: 'mision', target: 'findQR', label: 'extends' },
  
  // Tienda y Transacciones
  { id: 'tienda-estoyEnCasaMia', source: 'tienda', target: 'estoyEnCasaMia', label: '1:N' },
  { id: 'tienda-findQR', source: 'tienda', target: 'findQR', label: '1:N' },
  { id: 'tienda-menuScan', source: 'tienda', target: 'menuScan', label: '1:N' },
  { id: 'usuario-boleta', source: 'usuario', target: 'boleta', label: '1:N' },
  { id: 'boleta-recompensa', source: 'boleta', target: 'recompensa', label: '1:1' },
];

export default function EntitiesFlowDiagram() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        attributionPosition="bottom-left"
      >
        <Controls />
        <MiniMap 
          nodeColor={(node) => {
            switch (node.id) {
              case 'usuario': return '#1976d2';
              case 'perfil': case 'segmento': case 'segmentOptions': return '#7b1fa2';
              case 'billetera': case 'movimientos': return '#fbc02d';
              case 'producto': case 'tarjetaColeccion': return '#c2185b';
              case 'mision': case 'encuesta': case 'trivia': case 'estoyEnCasaMia': case 'findQR': return '#00796b';
              case 'recompensa': case 'insignia': return '#ef6c00';
              case 'tienda': case 'boleta': case 'menuScan': return '#5d4037';
              default: return '#ccc';
            }
          }}
        />
        <Background variant={BackgroundVariant.Dots} gap={20} size={1} />
      </ReactFlow>
    </div>
  );
}
