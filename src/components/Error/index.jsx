import React from 'react';
import PropTypes from 'prop-types';

import Head from '../Head';
import Background from '../Background';
import Container from '../Container';
import Widget from '../Widget';
import Link from '../Link';

import db from '../../../db/main.json';

export default function Error({ error, msg }) {
  return (
    <>
      <Head {...db} />
      <Background backgroundImage={db.bg}>
        <Container>
          <Widget>
            <Widget.Header>
              <h3>{`Ops! - Erro ${error}`}</h3>
            </Widget.Header>
            <Widget.Content>
              <p>{msg}</p>
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

Error.propTypes = {
  error: PropTypes.number.isRequired,
  msg: PropTypes.string.isRequired,
};
