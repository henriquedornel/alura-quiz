import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Footer = styled.footer`
  display: flex;
  align-items: center;
  margin: 20px 0;
  padding: 20px;
  border-radius: 4px; 
  background-color: #00000070;
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
`;

export default function FooterComponent({ ...props }) {
  return (
    <Footer
      {...props}
      as={motion.footer}
      transition={{ delay: 1, duration: 0.5 }}
      variants={{
        show: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      initial="hidden"
      animate="show"
    >
      <a href="https://www.alura.com.br/" rel="noreferrer" target="_blank">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/" rel="noreferrer" target="_blank">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </Footer>
  );
}
