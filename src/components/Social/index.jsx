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

export default function SocialComponent({ url, title, hashtags }) {
  return (
    <>
      <p>Compartilhe este quiz nas redes sociais!</p>
      <Social>
        <FacebookShareButton
          url={url}
          quote={title}
          hashtag={`#${hashtags[0]}`}
          className="social-media-button"
        >
          <FacebookIcon size={36} />
        </FacebookShareButton>
        <TwitterShareButton
          url={url}
          title={title}
          hashtags={hashtags}
          className="social-media-button"
        >
          <TwitterIcon size={36} />
        </TwitterShareButton>
        <WhatsappShareButton
          url={url}
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
  url: PropTypes.string.isRequired,
  hashtags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
