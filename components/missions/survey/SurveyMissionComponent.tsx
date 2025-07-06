import React, { useState } from 'react';
import {
  Typography,
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Paper,
  Divider
} from '@mui/material';
import BaseMissionComponent from '../BaseMissionComponent';
import { SurveyMissionProps } from '../MissionInterfaces';

const SurveyMissionComponent: React.FC<SurveyMissionProps> = ({
  mission,
  questions,
  onComplete,
  onCancel,
  onSubmitAnswers,
  isCompleted = false
}) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  const handleAnswer = (questionId: string, optionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  };
  
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };
  
  const handleSubmit = () => {
    onSubmitAnswers(answers);
    onComplete(mission.id);
  };
  
  const currentQuestion = questions[currentQuestionIndex];
  const hasAnsweredCurrent = answers[currentQuestion.id] !== undefined;
  const hasAnsweredAll = questions.every(q => answers[q.id] !== undefined);
  
  const SubmitButton = (
    <Button 
      variant="contained" 
      color="primary"
      onClick={handleSubmit}
      disabled={!hasAnsweredAll}
    >
      Enviar Respuestas
    </Button>
  );
  
  return (
    <BaseMissionComponent
      mission={mission}
      onComplete={onComplete}
      onCancel={onCancel}
      isCompleted={isCompleted}
      actionButton={hasAnsweredAll ? SubmitButton : undefined}
    >
      {isCompleted ? (
        <Box sx={{ textAlign: 'center', py: 2 }}>
          <Typography variant="body1" color="success.main" sx={{ fontWeight: 'bold' }}>
            ¡Gracias por completar esta encuesta!
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Tu opinión es muy valiosa para nosotros.
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
                  control={<Radio />}
                  label={option.text}
                  sx={{ mb: 1 }}
                />
              ))}
            </RadioGroup>
          </Paper>
          
          <Divider sx={{ my: 2 }} />
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button
              variant="outlined"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
            >
              Anterior
            </Button>
            
            <Button
              variant="contained"
              onClick={handleNext}
              disabled={!hasAnsweredCurrent}
            >
              {currentQuestionIndex < questions.length - 1 ? 'Siguiente' : 'Finalizar'}
            </Button>
          </Box>
        </>
      )}
    </BaseMissionComponent>
  );
};

// Necesitamos importar LinearProgress
import { LinearProgress } from '@mui/material';

export default SurveyMissionComponent;
