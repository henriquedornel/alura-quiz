import React from 'react';

import Head from '../Head';
import Background from '../Background';
import Container from '../Container';
import Widget from '../Widget';
import Link from '../Link';

import db from '../../../db/main.json';

export default function Error() {
  return (
    <>
      <Head {...db} />
      <Background backgroundImage={db.bg}>
        <Container>
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
        </Container>
      </Background>
    </>
  );
}
