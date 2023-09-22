import styled from 'styled-components';

export const StyledBackground = styled.div`
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background-color: transparent;
  color: white;

  .container {
    width: 100%;
    height: 100%;
    z-index: -1000;
    position: fixed;
    background-image: radial-gradient(
      1600px at 70% 120%,
      rgba(33, 39, 80, 1) 10%,
      #020409 100%
    );
  }

  .content {
    width: inherit;
    height: inherit;
  }

  #universe {
    width: 100%;
    height: 100%;
  }
`;
