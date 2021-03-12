import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';
import db from '../../db.json';

export default function ExternalQuizPage() {
  return (
    <ThemeProvider theme={db.theme}>
      <QuizScreen
        externalBg={db.bg}
        externalQuestions={db.questions}
      />
    </ThemeProvider>
  );
}
