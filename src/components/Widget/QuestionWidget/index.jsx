import React, { useState } from 'react';

import Widget from '../index';
import BackLinkArrow from '../../BackLinkArrow';

export default function QuestionWidget({
  question, questionIndex, totalQuestions, addResult, handleNext,
}) {
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const [isQuestionSubmitted, setIsQuestionSubmitted] = useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <Widget.Form
          onSubmit={(e) => {
            e.preventDefault();
            setIsQuestionSubmitted(true);

            setTimeout(() => {
              addResult(isCorrect);
              handleNext();
              setIsQuestionSubmitted(false);
              setSelectedAlternative(undefined);
            }, 2000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                key={`${questionId}__${alternativeId}`}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmitted && alternativeStatus}
              >
                <input
                  type="radio"
                  id={alternativeId}
                  name={questionId}
                  disabled={isQuestionSubmitted}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          <Widget.Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Widget.Button>
          {isQuestionSubmitted && isCorrect && <p>Você acertou!</p>}
          {isQuestionSubmitted && !isCorrect && <p>Você errou!</p>}
        </Widget.Form>
      </Widget.Content>
    </Widget>
  );
}
