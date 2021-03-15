import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import Background from '../../components/Background';
import Container from '../../components/Container';
import Logo from '../../components/Logo';
import LoadingWidget from '../../components/Widget/LoadingWidget';
import QuestionWidget from '../../components/Widget/QuestionWidget';
import FinishedWidget from '../../components/Widget/FinishedWidget';
import ErrorWidget from '../../components/Widget/ErrorWidget';
import GitHubCorner from '../../components/GitHubCorner';

import db from '../../../db.json';

const screenStates = {
  LOADING: 'LOADING',
  MOUNTED: 'MOUNTED',
  FINISHED: 'FINISHED',
  ERROR: 'ERROR',
};

export default function Quiz({ externalDB, fetchError }) {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [results, setResults] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const { bg, theme, questions } = externalDB || db;
  const questionIndex = currentQuestion;
  const question = questions[questionIndex];
  const totalQuestions = questions.length;

  const addResult = (result) => {
    setResults([...results, result]);
  };

  function handleNext() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.FINISHED);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      if (!totalQuestions || fetchError) {
        setScreenState(screenStates.ERROR);
        return;
      }
      setScreenState(screenStates.MOUNTED);
    }, 1000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Background backgroundImage={bg}>
        <Container>
          <Logo />
          {screenState === screenStates.LOADING && <LoadingWidget />}
          {screenState === screenStates.MOUNTED && (
            <QuestionWidget
              question={question}
              questionIndex={questionIndex}
              totalQuestions={totalQuestions}
              addResult={addResult}
              handleNext={handleNext}
            />
          )}
          {screenState === screenStates.FINISHED && <FinishedWidget results={results} />}
          {screenState === screenStates.ERROR && <ErrorWidget />}
        </Container>
        <GitHubCorner projectUrl={db.projectUrl} />
      </Background>
    </ThemeProvider>
  );
}
