import styled from 'styled-components';

export const StyledProjectListContainer = styled.ul`
  .container--project-list-title {
    font-size: 1.12rem;
    font-family: 'Lexend';
    font-weight: 500;
    font-style: normal;
    text-decoration: none;
    text-transform: none;
    color: rgba(226, 232, 240, 1);
    margin-top: 3rem;

    a {
      padding-left: 0.5rem;
      color: white;
      font-size: 0.725rem;
    }
  }

  .container--project-subtitle {
    font-size: 1rem;
    font-family: 'Lexend';
    font-weight: 500;
    font-style: normal;
    text-decoration: none;
    text-transform: none;
    color: rgba(99, 119, 149, 1);
    margin-top: 3rem;
  }
  .container--project-details {
    font-size: 0.825rem;
    font-family: 'Lexend';
    font-weight: 500;
    font-style: normal;
    text-decoration: none;
    text-transform: none;
    color: rgba(99, 119, 149, 1);
    margin-top: 1rem;
  }
  .container--project-text {
    font-size: 0.9rem;
    font-family: 'Montserrat';
    font-weight: 500;
    font-style: normal;
    line-height: 20px;
    letter-spacing: -0.02em;
    text-decoration: none;
    text-transform: none;
    color: rgba(148, 163, 184, 1);
    margin: 1rem 0;
  }
  .container--project-list-tags {
    display: flex;
    flex-wrap: wrap;
  }

  .container--project-links {
    display: flex;
    gap: 2rem;
    justify-content: flex-start;
    margin: 0.5rem 0;
    font-size: 0.825rem;
    font-family: 'Lexend';
    font-weight: 500;
  }
`;
