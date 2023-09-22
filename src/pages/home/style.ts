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
    span {
      color: #ff6f9f;
    }
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
`;

/* --color-brand-1: rgba(92,99,237,1);
	--color-brand-2: rgba(125,130,241,1);
	--color-brand-3: rgba(190,193,248,1);
	--color-brand-4: rgba(231,232,252,1);
	--color-grey-1: rgba(33,37,41,1);
	--color-grey-2: rgba(99,119,149,1);
	--color-grey-3: rgba(148,163,184,1);
	--color-grey-4: rgba(226,232,240,1);
	--color-grey-5: rgba(248,249,250,1); */
