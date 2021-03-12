import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
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

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    padding: 0;
    list-style: none;
  }
`;

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
`;

export default Widget;
