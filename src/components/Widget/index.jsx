import styled from 'styled-components';
import PropTypes from 'prop-types';

const Widget = styled.div`
  max-width: 350px;
  margin: 0 auto;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.mainBg};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  h1, h2, h3 {
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.propTypes = {
  children: PropTypes.node.isRequired,
};

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};  
  * {
    margin: 0;
  }
`;

Widget.Header.propTypes = {
  children: PropTypes.node.isRequired,
};

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  p:first-child {
    height: 50px;
  }
  ul {
    margin-bottom: 40px;
    padding: 0;
    list-style: none;
  }
  h3 {
    padding-bottom: 40px;
    font-weight: normal;
  }
  h4 {
    padding-top: 10px;
    font-size: 0.9rem;
    font-weight: normal;
    text-align: center;
  }
`;

Widget.Content.propTypes = {
  children: PropTypes.node.isRequired,
};

Widget.Input = styled.input`
  width: 100%;
  margin-bottom: 25px;
  padding: 15px;
  outline: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  ::placeholder {
    color: ${({ theme }) => theme.colors.contrastText}DD;
    opacity: 1;
  }
`;

Widget.Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Widget.Input.defaultProps = {
  type: 'text',
  value: '',
};

Widget.Button = styled.button`
  width: 100%;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 0;
  outline: 0;
  transition: .3s;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: .5;
  }
  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
  &.other-quizes-button {
    margin-top: 30px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

Widget.Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

Widget.Topic = styled.a`
  margin-bottom: 8px;
  padding: 10px 15px;
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  display: block;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  cursor: pointer;  
  &:hover,
  &:focus {
    opacity: .5;
  }
  input[type=radio] {
    display: none;
  }
`;

Widget.Topic.propTypes = {
  children: PropTypes.node.isRequired,
};

Widget.Form = styled.form`
  label {
    &[data-selected="true"] {
      background-color: ${({ theme }) => theme.colors.primary};      
      &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => theme.colors.success};
      }
      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.wrong};
      }
    }
    &[data-correct="true"] {
      background-color: ${({ theme }) => theme.colors.success};
    }
    &:focus {
      opacity: 1;
    } 
  }
  button {
    margin-top: 24px;
  }
`;

Widget.Form.propTypes = {
  children: PropTypes.node.isRequired,
};

Widget.PlayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin: 0 auto 10px;
  font-size: 14px;
  font-weight: bold;
  line-height: 1;
  text-transform: uppercase;  
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.success};
  border-radius: 50%;
  border: 0;
  outline: 0;
  transition: .3s;
  cursor: pointer;
  svg {
    margin: 0 auto;
  }
  &.stop {
    background-color: ${({ theme }) => theme.colors.wrong};
  }
`;

Widget.PlayButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Widget;
