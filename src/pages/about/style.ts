import styled from 'styled-components';

export const StyledAboutContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 3rem 1.5rem;

  .container--about-title {
    font-size: 1rem;
    font-family: 'Lexend';
    font-weight: 500;
    font-style: normal;
    text-decoration: none;
    text-transform: none;
    color: rgba(226, 232, 240, 1);
    margin: 2rem 0;
  }

  .container--about-text {
    font-size: 0.9rem;
    font-family: 'Montserrat';
    font-weight: 500;
    font-style: normal;
    line-height: 20px;
    letter-spacing: -0.02em;
    text-decoration: none;
    text-transform: none;
    color: rgba(148, 163, 184, 1);
    margin-top: 1rem;
  }
`;
