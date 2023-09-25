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

  .container--techs-scroll {
    overflow: hidden;
    white-space: nowrap;
    display: flex;
    .container--techs-list {
      display: flex;
      cursor: pointer;
      gap: 2rem;
      height: 165px;
      animation: scroll 15s linear infinite;
      padding: 0 0 0 1.5rem;
    }
    &:hover {
      .container--techs-list {
        animation-play-state: paused;
      }
    }
  }
  @keyframes scroll {
    100% {
      transform: translateX(0%);
    }
    0% {
      transform: translateX(-100%);
    }
  }

  .container--techs-item {
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: nowrap;
    align-items: end;
    margin: 0;
    height: 165px;
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
    display: flex;
  }

  .anchor--goDown {
    margin: 0 auto;
    background-color: transparent;
    color: rgba(148, 163, 184, 1);
    font-size: 32px;
  }
  @media (min-width: 912px) {
    .container--start-title {
      margin: 0 auto;
      padding-left: 1.5rem;
      max-width: 1250px;
    }
  }
`;
