import styled from 'styled-components';

export const StyledScrollPages = styled.section`
  .container--content-techs {
    font-size: 0.9rem;
    font-family: 'Lexend';
    font-weight: 300;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: rgba(148, 163, 184, 1);

    max-width: 85%;
    margin: 3rem 1.5rem;
  }
  @media (min-width: 912px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    max-width: 1250px;
    margin: 0 auto;
    overflow: visible;
    .container--content-techs {
      max-width: 420px;
      margin: 1.5rem;
    }

    .container--principal-content {
      margin-top: -802px;
      float: right;
      width: 50%;
      max-width: 625px;
    }
  }
`;
