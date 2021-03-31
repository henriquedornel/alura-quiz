import React, { useState, useEffect } from 'react';

import Head from '../src/components/Head';
import Background from '../src/components/Background';
import Container from '../src/components/Container';
import Logo from '../src/components/Logo';
import Grid from '../src/components/Grid';
import SearchBar from '../src/components/SearchBar';
import QuizWidget from '../src/components/Widget/QuizWidget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

import db from '../db/main.json';

export default function Home() {
  const { quizes } = db;
  const [initialData] = useState(quizes);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(initialData || []);

  const handleSearch = (e) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setSearch(e.target.value);
  };

  useEffect(() => {
    setFilteredData(
      initialData.filter(
        (quiz) => quiz.title.toLowerCase().includes(search.toLowerCase().trim())
        || quiz.description.toLowerCase().includes(search.toLowerCase().trim())
        || quiz.projectDB.toLowerCase().includes(search.toLowerCase().trim())
        || quiz.projectLink.toLowerCase().includes(search.toLowerCase().trim()),
      ),
    );
  }, [search]);

  return (
    <>
      <Head {...db} />
      <Background>
        <Container>
          <Logo />
          <h2 style={{ padding: 0 }}>{db.description}</h2>
          <SearchBar value={search} onChange={(e) => handleSearch(e)} />
          {filteredData.length === 0 && (
            <p>Nenhum quiz encontrado :(</p>
          )}
          {filteredData.length > 1 && (
            <p>{`${filteredData.length} quizes encontrados:`}</p>
          )}
          <Grid>
            {filteredData.length !== 0 && filteredData.map((quiz, index) => (
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
