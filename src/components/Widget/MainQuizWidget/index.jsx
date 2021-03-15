import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import Widget from '../index';

export default function MainQuizWidget({ db }) {
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
    router.push(`/quiz?userName=${userName}`);
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
        <h1>{db.title}</h1>
      </Widget.Header>
      <Widget.Content>
        <p>{db.description}</p>
        <form onSubmit={(e) => onSubmit(e)}>
          <Widget.Input
            name="userName"
            placeholder="Informe o seu nome"
            value={userName}
            onChange={(e) => onChange(e.target.value, setUserName)}
          />
          <Widget.Button type="submit" disabled={isButtonDisabled()}>
            Jogar
          </Widget.Button>
        </form>
      </Widget.Content>
    </Widget>
  );
}
