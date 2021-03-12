import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuizScreen from '../../src/screens/Quiz';

export default function ExternalQuizPage({ externalDb }) {
  return (
    <ThemeProvider theme={externalDb.theme}>
      <QuizScreen
        externalBg={externalDb.bg}
        externalQuestions={externalDb.questions}
      />
    </ThemeProvider>
  );
}

export async function getServerSideProps(context) {
  const [projectName, githubUser] = context.query.id.split('___');

  try {
    const externalDb = await fetch(`https://${projectName}.${githubUser}.vercel.app/api/db`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Falha ao carregar os dados');
      })
      .then((resObj) => resObj);

    return {
      props: {
        externalDb,
      },
    };
  } catch (err) {
    throw new Error(err);
  }
}
