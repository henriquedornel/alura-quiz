import styled from 'styled-components';

const Background = styled.div`
  flex: 1;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-color: ${({ theme }) => theme.colors.mainBg};
  @media screen and (max-width: 500px) {
    background-image: none;
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 210px;
      z-index: 1;
      background-size: cover;
      background-position: center;
      background-image:
        linear-gradient(transparent, ${({ theme }) => theme.colors.mainBg}),
        url(${({ backgroundImage }) => backgroundImage});
    }
    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default Background;
