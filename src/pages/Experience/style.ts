import styled from 'styled-components';

export const StyledExperienceContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 3rem 1.5rem;

  .container--experience-title {
    font-size: 1rem;
    font-family: 'Lexend';
    font-weight: 500;
    font-style: normal;
    text-decoration: none;
    text-transform: none;
    color: rgba(226, 232, 240, 1);
    margin-top: 1rem;
  }

  .container--experience-subtitle {
    font-size: 1rem;
    font-family: 'Lexend';
    font-weight: 500;
    font-style: normal;
    text-decoration: none;
    text-transform: none;
    color: rgba(99, 119, 149, 1);
    margin-top: 3rem;
  }
  .container--experience-details {
    font-size: 0.825rem;
    font-family: 'Lexend';
    font-weight: 500;
    font-style: normal;
    text-decoration: none;
    text-transform: none;
    color: rgba(99, 119, 149, 1);
    margin-top: 1rem;
  }
  .container--experience-text {
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
  nav {
    display: none;
  }

  @media (min-width: 912px) {
    padding-top: 40px;
    margin-bottom: 310px;
  }
`;
