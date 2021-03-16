import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import Widget from '../index';
import Link from '../../Link';

export default function ExternalQuizesWidget({ externals }) {
  const extractURL = (url) => {
    const replaced = url
      .replace(/\//g, '')
      .replace('https:', '')
      .split('.');
    const [projectName, author] = replaced;

    return { projectName, author };
  };

  let externalQuizes = externals.map((item, index) => {
    const { projectName, author } = extractURL(item);
    const redirectLink = `${projectName}.${author}`;

    return (
      <li key={`quiz__${index}`}>
        <Widget.Topic as={Link} href={`/quiz/${redirectLink}`}>
          { redirectLink }
        </Widget.Topic>
      </li>
    );
  });

  if (!externals.length) {
    externalQuizes = <li>Nenhum quiz externo encontrado</li>;
  }

  return (
    <Widget
      as={motion.section}
      transition={{ delay: 1, duration: 0.5 }}
      variants={{
        show: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      initial="hidden"
      animate="show"
    >
      <Widget.Content>
        <p>Outros Quizes</p>
        <ul>
          {externalQuizes}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

ExternalQuizesWidget.propTypes = {
  externals: PropTypes.arrayOf(PropTypes.string).isRequired,
};
