import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import Widget from '../index';

import db from '../../../../db/main.json';

export default function QuizWidget({ quiz }) {
  const router = useRouter();
  const [userName, setUserName] = useState('');

  const isButtonDisabled = () => (
    userName.trim().length === 0
  );

  const onChange = (value, handlerFunction) => {
    handlerFunction(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    router.push(`/quiz/${quiz.projectDB}?userName=${userName}`);
  };

  return (
    <Widget
      as={motion.section}
      transition={{ delay: 0, duration: 0.5 }}
      variants={{
        show: { opacity: 1, y: '0' },
        hidden: { opacity: 0, y: '100%' },
      }}
      initial="hidden"
      animate="show"
    >
      <Widget.Header>
        <h1>{quiz.title}</h1>
      </Widget.Header>
      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={quiz.bg}
      />
      <Widget.Content>
        <p>{quiz.description}</p>
        <p>
          Autor(a):
          {' '}
          <a href={quiz.projectLink} target="_blank" rel="noreferrer" style={{ color: db.theme.colors.contrastText }}>
            {quiz.author}
          </a>
        </p>
        <form onSubmit={(e) => onSubmit(e)}>
          <Widget.Input
            name="userName"
            placeholder="Informe o seu nome"
            value={userName}
            onChange={(e) => onChange(e.target.value, setUserName)}
          />
          <Widget.Button type="submit" disabled={isButtonDisabled()}>
            Jogar!
          </Widget.Button>
        </form>
      </Widget.Content>
    </Widget>
  );
}

QuizWidget.propTypes = {
  quiz: PropTypes.object.isRequired,
};
