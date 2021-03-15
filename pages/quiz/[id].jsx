import React from 'react';
import QuizScreen from '../../src/screens/Quiz';

function ExternalQuiz({ externalDB }) {
  const { error } = externalDB;

  return (
    <QuizScreen externalDB={externalDB} fetchError={error} />
  );
}

export async function getServerSideProps(context) {
  const [projectName, author] = context.query.id.split('.');

  const externalDB = await fetch(`https://${projectName}.${author}.vercel.app/api/db`)
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
    },
  };
}

export default ExternalQuiz;
