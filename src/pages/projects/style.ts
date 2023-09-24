import styled from 'styled-components';

export const StyledProjectContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 3rem 1.5rem;

  .container--project-title {
    font-size: 1rem;
    font-family: 'Lexend';
    font-weight: 500;
    font-style: normal;
    text-decoration: none;
    text-transform: none;
    color: rgba(226, 232, 240, 1);
    margin-top: 1rem;

    a {
      padding-left: 0.5rem;
      color: white;
      font-size: 0.725rem;
    }
  }

  @media (min-width: 912px) {
    padding-top: 66px;
    padding-bottom: 90px;
  }
`;
