import React, { useState } from 'react';
import {
  Typography,
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Paper,
  LinearProgress,
  Divider,
  Alert
} from '@mui/material';
import BaseMissionComponent from '../BaseMissionComponent';
import { TriviaMissionProps } from '../MissionInterfaces';

const TriviaMissionComponent: React.FC<TriviaMissionProps> = ({
  mission,
  questions,
  onComplete,
  onCancel,
  onSubmitAnswers,
  isCompleted = false
}) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  
  const handleAnswer = (questionId: string, optionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  };
  
  const handleCheckAnswer = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedAnswer = answers[currentQuestion.id];
    const isAnswerCorrect = selectedAnswer === currentQuestion.correctAnswerId;
    
    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);
    
    if (isAnswerCorrect && currentQuestionIndex === questions.length - 1) {
      // Si es la última pregunta y la respuesta es correcta, completamos la misión
      setTimeout(() => {
        onSubmitAnswers(answers);
        onComplete(mission.id);
      }, 1500);
    }
  };
  
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setShowFeedback(false);
    }
  };
  
  const currentQuestion = questions[currentQuestionIndex];
  const hasAnsweredCurrent = answers[currentQuestion.id] !== undefined;
  
  return (
    <BaseMissionComponent
      mission={mission}
      onComplete={onComplete}
      onCancel={onCancel}
      isCompleted={isCompleted}
    >
      {isCompleted ? (
        <Box sx={{ textAlign: 'center', py: 2 }}>
          <Typography variant="h6" color="success.main" sx={{ fontWeight: 'bold', mb: 1 }}>
            ¡Felicidades! Has completado esta trivia
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Has demostrado tu conocimiento sobre los productos de CasaMia.
          </Typography>
        </Box>
      ) : (
        <>
          <Box sx={{ mb: 2 }}>
            <Typography variant="subtitle1" sx={{ mb: 1, fontWeight: 'bold' }}>
              Pregunta {currentQuestionIndex + 1} de {questions.length}
            </Typography>
            <LinearProgress 
              variant="determinate" 
              value={(currentQuestionIndex + 1) / questions.length * 100} 
            />
          </Box>
          
          <Paper elevation={0} sx={{ p: 2, border: '1px solid #eee', mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              {currentQuestion.text}
            </Typography>
            
            <RadioGroup
              value={answers[currentQuestion.id] || ''}
              onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
            >
              {currentQuestion.options.map(option => (
                <FormControlLabel
                  key={option.id}
                  value={option.id}
                  control={<Radio disabled={showFeedback} />}
                  label={option.text}
                  sx={{ mb: 1 }}
                  disabled={showFeedback}
                />
              ))}
            </RadioGroup>
          </Paper>
          
          {showFeedback && (
            <Box sx={{ mb: 3 }}>
              <Alert severity={isCorrect ? "success" : "error"}>
                {isCorrect 
                  ? "¡Correcto! Muy bien." 
                  : "Respuesta incorrecta. Inténtalo de nuevo."}
              </Alert>
            </Box>
          )}
          
          <Divider sx={{ my: 2 }} />
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {!showFeedback ? (
              <Button
                variant="contained"
                onClick={handleCheckAnswer}
                disabled={!hasAnsweredCurrent}
                fullWidth
              >
                Verificar Respuesta
              </Button>
            ) : (
              <>
                {!isCorrect && (
                  <Button
                    variant="outlined"
                    onClick={() => setShowFeedback(false)}
                  >
                    Intentar de Nuevo
                  </Button>
                )}
                
                {isCorrect && currentQuestionIndex < questions.length - 1 && (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                  >
                    Siguiente Pregunta
                  </Button>
                )}
                
                {isCorrect && currentQuestionIndex === questions.length - 1 && (
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => {
                      onSubmitAnswers(answers);
                      onComplete(mission.id);
                    }}
                  >
                    ¡Completar Trivia!
                  </Button>
                )}
              </>
            )}
          </Box>
        </>
      )}
    </BaseMissionComponent>
  );
};

export default TriviaMissionComponent;
