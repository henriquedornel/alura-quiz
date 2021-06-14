import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BsPlay, BsStopFill } from 'react-icons/bs';
import { Howl } from 'howler';
import { motion } from 'framer-motion';

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

  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const hasSound = !!question.sound;

  useEffect(() => {
    if (hasSound) {
      setSound(new Howl({
        src: question.sound,
        html5: true,
        volume: 0.5,
        autoplay: false,
        preload: true,
        onplay: () => {
          setIsPlaying(true);
        },
        onstop: () => {
          setIsPlaying(false);
        },
        onend: () => {
          setIsPlaying(false);
        },
      }));
    }
  }, [question]);

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
        {question.description && <p>{question.description}</p>}
        {hasSound && (
          <Widget.PlayButton
            onClick={() => {
              if (!isPlaying) {
                sound.play();
              } else {
                sound.stop();
              }
            }}
            as={motion.button}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1 },
            }}
            whileTap={{ scale: 1 }}
            disabled={isQuestionSubmitted}
            className={isPlaying && 'stop'}
          >
            {!isPlaying && <BsPlay size={40} />}
            {isPlaying && <BsStopFill size={40} />}
          </Widget.PlayButton>
        )}
        <Widget.Form
          onSubmit={(e) => {
            e.preventDefault();
            setIsQuestionSubmitted(true);
            if (hasSound) sound.fade(1, 0, 2000);

            setTimeout(() => {
              addResult(isCorrect);
              handleNext();
              setIsQuestionSubmitted(false);
              setSelectedAlternative(undefined);
              if (hasSound) sound.stop();
            }, 2000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            const isCorrectAnswer = alternativeIndex === question.answer;
            return (
              <Widget.Topic
                as="label"
                key={`${questionId}__${alternativeId}`}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmitted && alternativeStatus}
                data-correct={isQuestionSubmitted && isCorrectAnswer}
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
        </Widget.Form>
      </Widget.Content>
    </Widget>
  );
}

QuestionWidget.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  addResult: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
};
