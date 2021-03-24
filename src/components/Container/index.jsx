import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 100%;
  max-width: 90vw;
  margin: auto auto 25px;
  padding-top: 45px;
  @media screen and (max-width: 600px) {
    margin: auto;
    padding: 15px;
  }
`;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
