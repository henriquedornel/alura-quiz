import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import Background from '../src/components/Background';
import Container from '../src/components/Container';
import Logo from '../src/components/Logo';
import Widget from '../src/components/Widget';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import Link from '../src/components/Link';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

import db from '../db.json';

export default function Home() {
  const router = useRouter();
  const [userName, setUserName] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/quiz?userName=${userName}`);
  };

  const getExternalQuiz = (link) => (
    link.replace(/\//g, '')
      .replace('https:', '')
      .replace('.vercel.app', '')
      .split('.')
  );

  return (
    <Background backgroundImage={db.bg}>
      <Container>
        <Logo />
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={(e) => handleSubmit(e)}>
              <Input
                name="userName"
                placeholder="Informe o seu nome"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <Button type="submit" disabled={userName.trim().length === 0}>
                {`Jogar ${userName}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>Outros Quizes</h1>
            <ul>
              {
                db.external.map((externalLink) => {
                  const [projectName, githubUser] = getExternalQuiz(externalLink);
                  return (
                    <li key={externalLink}>
                      <Widget.Topic
                        as={Link}
                        href={`/quiz/${projectName}___${githubUser}`}
                      >
                        {`${githubUser}/${projectName}`}
                      </Widget.Topic>
                    </li>
                  );
                })
              }
            </ul>
          </Widget.Content>
        </Widget>
        <Footer
          as={motion.footer}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        />
      </Container>
      <GitHubCorner projectUrl={db.projectUrl} />
    </Background>
  );
}
