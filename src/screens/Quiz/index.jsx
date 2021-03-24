import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Head from '../../components/Head';
import Background from '../../components/Background';
import Container from '../../components/Container';
import Logo from '../../components/Logo';
import LoadingWidget from '../../components/Widget/LoadingWidget';
import QuestionWidget from '../../components/Widget/QuestionWidget';
import FinishedWidget from '../../components/Widget/FinishedWidget';
import ErrorWidget from '../../components/Widget/ErrorWidget';
import GitHubCorner from '../../components/GitHubCorner';

import db from '../../../db/main.json';

const screenStates = {
  LOADING: 'LOADING',
  MOUNTED: 'MOUNTED',
  FINISHED: 'FINISHED',
  ERROR: 'ERROR',
};

export default function QuizScreen({ externalDB, project, fetchError }) {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [results, setResults] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const { bg, title, questions } = externalDB;
  const questionIndex = currentQuestion;
  const question = questions[questionIndex];
  const totalQuestions = questions.length;

  const quizUrl = `${db.url}/quiz/${project}`;

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
    }, 2000);
  }, []);

  return (
    <>
      <Head {...externalDB} url={quizUrl} />
      <Background backgroundImage={bg}>
        <Container>
          <Logo />
          {screenState === screenStates.LOADING && (
            <LoadingWidget />
          )}
          {screenState === screenStates.MOUNTED && (
            <QuestionWidget
              question={question}
              questionIndex={questionIndex}
              totalQuestions={totalQuestions}
              addResult={addResult}
              handleNext={handleNext}
            />
          )}
          {screenState === screenStates.FINISHED && (
            <FinishedWidget title={title} project={project} quizUrl={quizUrl} results={results} />
          )}
          {screenState === screenStates.ERROR && (
            <ErrorWidget />
          )}
        </Container>
        <GitHubCorner repository={db.repository} />
      </Background>
    </>
  );
}

QuizScreen.propTypes = {
  externalDB: PropTypes.object.isRequired,
  project: PropTypes.string.isRequired,
  fetchError: PropTypes.any,
};

QuizScreen.defaultProps = {
  fetchError: undefined,
};
