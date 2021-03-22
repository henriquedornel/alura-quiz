import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import Widget from '../index';
import Link from '../../Link';
import Social from '../../Social';

export default function FinishedWidget({ title, url, results }) {
  const router = useRouter();
  const { userName } = router.query;
  const name = userName ? `${userName}, ` : '';

  return (
    <Widget
      as={motion.section}
      transition={{ delay: 0.3, duration: 0.5 }}
      variants={{
        show: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      initial="hidden"
      animate="show"
    >
      <Widget.Header>
        <h3>{title}</h3>
      </Widget.Header>
      <Widget.Content>
        <p>
          {`${name}você acertou ${results.filter((x) => x).length} de ${results.length} perguntas!`}
        </p>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${index}`}>
              {`#${index + 1}: ${result === true ? 'Acertou' : 'Errou'}`}
            </li>
          ))}
        </ul>
        <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>
          <Widget.Button type="button">
            Jogar novamente!
          </Widget.Button>
        </Link>
        <Social url={url} title={title} hashtags={['alura', 'imersao-react', 'aluraquiz']} />
      </Widget.Content>
    </Widget>
  );
}

FinishedWidget.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(PropTypes.bool).isRequired,
};
