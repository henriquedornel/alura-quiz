import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 100%;
  max-width: 350px;
  margin: auto 10%;
  padding-top: 45px;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
