import React from 'react';

import Head from '../src/components/Head';
import Background from '../src/components/Background';
import Container from '../src/components/Container';
import Logo from '../src/components/Logo';
import Grid from '../src/components/Grid';
import QuizWidget from '../src/components/Widget/QuizWidget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

import db from '../db/main.json';

export default function Home() {
  const { quizes } = db;

  return (
    <>
      <Head {...db} />
      <Background backgroundImage={db.bg}>
        <Container>
          <Logo />
          <Grid>
            {quizes.map((quiz, index) => (
              <QuizWidget quiz={quiz} key={index} />
            ))}
          </Grid>
          <Footer />
        </Container>
        <GitHubCorner repository={db.repository} />
      </Background>
    </>
  );
}
