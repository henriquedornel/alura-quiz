import styled from 'styled-components';
import PropTypes from 'prop-types';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px 12px;
  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;
