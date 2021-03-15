import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Link from '../Link';

const BackLinkArrow = styled(Link)`
  display: inline-block;
  width: 24px;
  height: 24px;
  transition: .3s;
  &:hover {
    opacity: .5;
  }
  svg {
    vertical-align: middle;
  }
`;

BackLinkArrow.propTypes = {
  href: PropTypes.string.isRequired,
};

export default function BackLinkArrowComponent({ href, ...props }) {
  return (
    <BackLinkArrow href={href} {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="white" fillOpacity="0.87" />
      </svg>
    </BackLinkArrow>
  );
}
