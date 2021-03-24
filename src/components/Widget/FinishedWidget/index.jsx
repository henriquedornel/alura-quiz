import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import Widget from '../index';
import Link from '../../Link';
import Social from '../../Social';

export default function FinishedWidget({ title, project, quizUrl, results }) {
  const router = useRouter();
  const { userName } = router.query;
  const name = userName ? `${userName}, ` : '';

  return (
    <Widget>
      <Widget.Header>
        <h3>{title}</h3>
      </Widget.Header>
      <Widget.Content>
        <h3>
          {`${name}você acertou ${results.filter((x) => x).length} de ${results.length} perguntas!`}
        </h3>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${index}`}>
              {`#${index + 1}: ${result === true ? 'Acertou' : 'Errou'}`}
            </li>
          ))}
        </ul>
        <Link href={`/quiz/${project}`}>
          <Widget.Button type="button">
            Jogar novamente
          </Widget.Button>
        </Link>
        <Link href="/">
          <Widget.Button type="button" className="other-quizes-button">
            Jogar outros quizes
          </Widget.Button>
        </Link>
        <Social quizUrl={quizUrl} title={title} hashtags={['alura', 'imersao-react', 'aluraquiz']} />
      </Widget.Content>
    </Widget>
  );
}

FinishedWidget.propTypes = {
  title: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  quizUrl: PropTypes.string.isRequired,
  results: PropTypes.arrayOf(PropTypes.bool).isRequired,
};
