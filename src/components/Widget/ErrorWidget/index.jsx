import React from 'react';

import Widget from '../index';
import Link from '../../Link';

export default function ErrorWidget() {
  return (
    <Widget>
      <Widget.Header>
        <h3>Ops!</h3>
      </Widget.Header>
      <Widget.Content>
        <p>Quiz não encontrado :(</p>
        <Link href="/" style={{ color: '#fff', textDecoration: 'none' }}>
          <Widget.Button type="button">
            Procurar outros quizes
          </Widget.Button>
        </Link>
      </Widget.Content>
    </Widget>
  );
}
