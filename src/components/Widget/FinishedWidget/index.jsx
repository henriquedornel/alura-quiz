import React from 'react';

import Widget from '../index';
import BackLinkArrow from '../../BackLinkArrow';

export default function FinishedWidget({ results }) {
  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>Resultado:</h3>
      </Widget.Header>
      <Widget.Content>
        <p>{`Você acertou ${results.filter((x) => x).length} perguntas`}</p>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${index}`}>
              {`#${index + 1} Resultado: ${result === true ? 'Acertou' : 'Errou'}`}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}
