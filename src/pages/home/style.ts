import styled from 'styled-components';

export const StyledHomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 3rem 1.5rem;

  .container--header-title {
    font-size: 2.5rem;
    font-family: 'Montserrat';
    font-weight: 600;
    font-style: normal;
    line-height: 38px;
    letter-spacing: -0.02em;
    color: rgba(226, 232, 240, 1);
  }
  .container--header-hover {
    color: #ff6f9f;
    cursor: pointer;
  }

  .container--header-image {
    height: 0px;
    visibility: hidden;
    opacity: 0;
    transition: opacity 1s ease-out;
  }

  .container--header-subtitle {
    font-size: 1.2rem;
    font-family: 'Lexend';
    font-weight: 500;
    font-style: normal;
    text-decoration: none;
    text-transform: none;
    color: rgba(226, 232, 240, 1);
    margin-top: 1rem;
  }

  .container--header-text {
    font-size: 0.9rem;
    font-family: 'Montserrat';
    font-weight: 500;
    line-height: 20px;
    letter-spacing: -0.02em;
    max-width: 300px;
    color: rgba(148, 163, 184, 1);
    margin-top: 1rem;
  }
  nav {
    display: none;
  }

  .container--header-media {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    a {
      color: rgba(148, 163, 184, 1);
      cursor: pointer;

      i {
        font-size: 1.5rem;
      }
    }
  }

  @media (min-width: 912px) {
    justify-content: space-around;
    position: sticky;
    top: 20px;
    width: 625px;

    .container--header-image {
      position: absolute;
      border-radius: 50%;
      top: 100px;
      left: 320px;
      width: 150px;
      border: #ff6f9f 2px solid;
    }

    .container--header-hover:hover .container--header-image {
      height: 150px;
      visibility: visible;
      opacity: 1;
    }
    nav {
      margin-top: 4rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      a {
        display: flex;
        flex-direction: row;
        align-items: center;
        .nav-indicator-text {
          font-size: 1rem;
          font-family: 'Lexend';
          font-weight: 500;
          color: rgba(148, 163, 184, 1);
          margin-top: 1rem;
        }
        .nav-indicator-hover {
          margin-top: 1rem;
          background-color: rgba(148, 163, 184, 1);
          color: rgba(148, 163, 184, 1);
          font-size: 0.2rem;
          padding-right: 32px;
          margin-right: 8px;
          transition: 1s ease;
        }
      }
      a:hover .nav-indicator-hover {
        padding-right: 82px;
        background-color: rgba(226, 232, 240, 1);
      }

      a:hover .nav-indicator-text {
        color: rgba(226, 232, 240, 1);
      }
      a:focus .nav-indicator-hover {
        padding-right: 82px;
        background-color: rgba(226, 232, 240, 1);
      }

      a:focus .nav-indicator-text {
        color: rgba(226, 232, 240, 1);
      }
    }

    .container--header-media {
      margin-top: 300px;
      a {
        i {
          font-size: 2rem;
          padding-right: 0.275rem;
        }
      }
    }
  }
`;
