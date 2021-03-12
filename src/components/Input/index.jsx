import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  width: 100%;
  margin-bottom: 25px;
  padding: 15px;
  outline: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${({ theme }) => theme.colors.contrastText}DD;
    opacity: 1; /* Firefox */
  }
`;

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
