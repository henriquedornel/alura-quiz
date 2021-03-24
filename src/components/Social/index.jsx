import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from 'react-share';

const Social = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  button {
    margin: 0 5px;
    border: 0;
    outline: 0;
  }
`;

export default function SocialComponent({ quizUrl, title, hashtags }) {
  return (
    <>
      <h4>Compartilhe este quiz nas redes sociais!</h4>
      <Social>
        <FacebookShareButton
          url={quizUrl}
          quote={title}
          hashtag={`#${hashtags[0]}`}
          className="social-media-button"
        >
          <FacebookIcon size={36} />
        </FacebookShareButton>
        <TwitterShareButton
          url={quizUrl}
          title={title}
          hashtags={hashtags}
          className="social-media-button"
        >
          <TwitterIcon size={36} />
        </TwitterShareButton>
        <WhatsappShareButton
          url={quizUrl}
          title={title}
        >
          <WhatsappIcon size={36} />
        </WhatsappShareButton>
      </Social>
    </>
  );
}

SocialComponent.propTypes = {
  title: PropTypes.string.isRequired,
  quizUrl: PropTypes.string.isRequired,
  hashtags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
