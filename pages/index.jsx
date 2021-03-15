import React from 'react';

import Background from '../src/components/Background';
import Container from '../src/components/Container';
import Logo from '../src/components/Logo';
import MainQuizWidget from '../src/components/Widget/MainQuizWidget';
import ExternalQuizesWidget from '../src/components/Widget/ExternalQuizesWidget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

import db from '../db.json';

export default function Home() {
  return (
    <Background backgroundImage={db.bg}>
      <Container>
        <Logo />
        <MainQuizWidget db={db} />
        <ExternalQuizesWidget externals={db.external} />
        <Footer />
      </Container>
      <GitHubCorner projectUrl={db.projectUrl} />
    </Background>
  );
}
