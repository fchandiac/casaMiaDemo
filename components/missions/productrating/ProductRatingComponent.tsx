import React, { useState } from 'react';
import {
  Typography,
  Box,
  Button,
  Paper,
  Divider,
  TextField,
  Avatar,
  Rating
} from '@mui/material';
import { Send, ShoppingBag } from '@mui/icons-material';
import BaseMissionComponent from '../BaseMissionComponent';
import { ProductRatingMissionProps } from '../MissionInterfaces';

const ProductRatingComponent: React.FC<ProductRatingMissionProps> = ({
  mission,
  product,
  onComplete,
  onCancel,
  onSubmitRating,
  isCompleted = false
}) => {
  const [rating, setRating] = useState<number | null>(null);
  const [comment, setComment] = useState('');
  const [commentError, setCommentError] = useState(false);
  
  const handleRatingChange = (event: React.SyntheticEvent, newValue: number | null) => {
    setRating(newValue);
  };
  
  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setComment(value);
    setCommentError(value.length > 0 && value.length < 10);
  };
  
  const handleSubmit = () => {
    if (rating && comment.length >= 10) {
      onSubmitRating(rating, comment);
      onComplete(mission.id);
    } else if (comment.length < 10) {
      setCommentError(true);
    }
  };
  
  const isFormValid = rating !== null && comment.length >= 10;
  
  const ActionButton = (
    <Button 
      variant="contained" 
      color="primary"
      onClick={handleSubmit}
      disabled={!isFormValid}
      startIcon={<Send />}
    >
      Enviar Valoración
    </Button>
  );
  
  return (
    <BaseMissionComponent
      mission={mission}
      onComplete={onComplete}
      onCancel={onCancel}
      isCompleted={isCompleted}
      actionButton={!isCompleted ? ActionButton : undefined}
    >
      {isCompleted ? (
        <Box sx={{ textAlign: 'center', py: 2 }}>
          <Typography variant="h6" color="success.main" sx={{ fontWeight: 'bold', mb: 1 }}>
            ¡Gracias por valorar {product.name}!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Tu opinión nos ayuda a mejorar nuestros productos.
          </Typography>
        </Box>
      ) : (
        <>
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>
              Producto a Valorar
            </Typography>
            
            <Paper elevation={0} sx={{ p: 2, border: '1px solid #eee' }}>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Avatar 
                  src={product.imageUrl} 
                  variant="rounded"
                  sx={{ 
                    width: 60, 
                    height: 60,
                    bgcolor: '#f0f0f0'
                  }}
                >
                  <ShoppingBag />
                </Avatar>
                
                <Box>
                  <Typography variant="h6" sx={{ mb: 0.5 }}>{product.name}</Typography>
                  
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Box>
          
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>
              Tu Valoración
            </Typography>
            
            <Paper elevation={0} sx={{ p: 2, border: '1px solid #eee' }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                ¿Cómo puntuarías este producto?
              </Typography>
              
              <Rating
                name="product-rating"
                value={rating}
                onChange={handleRatingChange}
                size="large"
                precision={0.5}
                sx={{ mb: 2 }}
              />
              
              <Divider sx={{ my: 2 }} />
              
              <Typography variant="body2" sx={{ mb: 1 }}>
                Comparte tu opinión (mínimo 10 caracteres)
              </Typography>
              
              <TextField
                fullWidth
                multiline
                rows={4}
                placeholder="¿Qué te ha parecido este producto? ¿Lo recomendarías? ¿Qué es lo que más te ha gustado?"
                value={comment}
                onChange={handleCommentChange}
                error={commentError}
                helperText={commentError ? "Por favor, escribe al menos 10 caracteres" : ""}
                sx={{ mb: 1 }}
              />
            </Paper>
          </Box>
          
          <Typography variant="body2" color="text.secondary">
            Para completar esta misión, valora el producto con estrellas y deja un comentario sobre tu experiencia.
          </Typography>
        </>
      )}
    </BaseMissionComponent>
  );
};

export default ProductRatingComponent;
