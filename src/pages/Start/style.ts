import styled from 'styled-components';

export const StyledStartContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;

  .container--start-title {
    font-size: 1rem;
    font-family: 'Lexend';
    font-weight: 500;
    color: rgba(148, 163, 184, 1);
    margin-left: 1.5rem;
  }

  .container--techs-list {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    overflow: visible;
    align-items: end;
    height: 165px;
    animation: goBack 30s infinite alternate;
  }

  @keyframes goBack {
    from {
      transform: translateX(calc(-90%));
    }
    to {
      transform: translateX(calc(0%));
    }
  }
  .container--techs-name {
    font-size: 0.825rem;
    font-family: 'Lexend';
    font-weight: 500;
    color: rgba(226, 232, 240, 1);
    background-color: rgba(226, 232, 240, 0.1);
    text-align: center;
    padding: 0.575rem;
    border-radius: 1rem;
    display: none;
    width: fit-content;
  }

  .container--techs-icom {
    font-size: 5rem;
    color: rgba(148, 163, 184, 1);
    padding: 1rem;
    width: 55px;
    height: auto;
    text-align: center;
  }
  .container--techs-icom:hover .container--techs-name {
    display: inline-block;
  }

  @media (min-width: 912px) {
    .container--start-title {
      margin: 0 auto;
      padding-left: 1.5rem;
      max-width: 1250px;
    }
  }
`;
