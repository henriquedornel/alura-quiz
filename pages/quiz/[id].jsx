import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import Head from '../../src/components/Head';
import Background from '../../src/components/Background';
import Container from '../../src/components/Container';
import Logo from '../../src/components/Logo';
import QuizWidget from '../../src/components/Widget/QuizWidget';
import GitHubCorner from '../../src/components/GitHubCorner';

import QuizScreen from '../../src/screens/Quiz';

import db from '../../db/main.json';

export async function getServerSideProps({ query }) {
  const projectDB = query.id;
  const url = `${db.url}/api/${projectDB}`;

  const externalDB = await fetch(url)
    .then((res) => {
      if (res.ok) {
        return res ? res.json() : null;
      }
      throw new Error('Falha ao carregar os dados');
    })
    .catch((err) => {
      throw new Error(err);
    });

  return {
    props: {
      externalDB,
      projectDB,
    },
  };
}

export default function Quiz({ externalDB, projectDB }) {
  const router = useRouter();
  const { userName } = router.query;
  const quiz = { projectDB, ...externalDB };
  const quizUrl = `${db.url}/quiz/${projectDB}`;

  if (!userName) {
    return (
      <>
        <Head {...externalDB} url={quizUrl} />
        <Background>
          <Container>
            <Logo />
            <QuizWidget quiz={quiz} />
          </Container>
          <GitHubCorner repository={db.repository} />
        </Background>
      </>
    );
  }

  return (
    <QuizScreen externalDB={externalDB} projectDB={quiz.projectDB} />
  );
}

Quiz.propTypes = {
  externalDB: PropTypes.object.isRequired,
  projectDB: PropTypes.string.isRequired,
};
