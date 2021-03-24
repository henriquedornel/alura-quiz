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
  const project = query.id;
  let url;

  if (project.substring(project.length - 3) === '-db') {
    const projectDB = project.split('-db');
    url = `${db.url}/api/${projectDB[0]}`;
  } else {
    url = `https://${project}.vercel.app/api/db`;
  }

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
      project,
    },
  };
}

export default function Quiz({ externalDB, project }) {
  const router = useRouter();
  const { userName } = router.query;
  const { error } = externalDB;
  const quiz = { project, ...externalDB };

  if (!userName) {
    return (
      <>
        <Head {...db} />
        <Background backgroundImage={db.bg}>
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
    <QuizScreen externalDB={externalDB} project={quiz.project} fetchError={error} />
  );
}

Quiz.propTypes = {
  externalDB: PropTypes.object.isRequired,
  project: PropTypes.string.isRequired,
};
