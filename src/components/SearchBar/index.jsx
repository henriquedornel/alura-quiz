import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Widget from '../Widget';

const SearchBar = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.mainBg};
  z-index: 100;
  input {
    margin: 20px 0;
  }
`;

export default function SearchBarComponent({ value, onChange }) {
  return (
    <SearchBar>
      <Widget.Input
        type="search"
        name="search"
        placeholder="Pesquisar Quiz..."
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="none"
        value={value}
        onChange={onChange}
      />
    </SearchBar>
  );
}

SearchBarComponent.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

SearchBarComponent.defaultProps = {
  value: '',
};
