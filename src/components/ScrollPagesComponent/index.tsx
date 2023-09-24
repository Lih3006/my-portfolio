import { StyledScrollPages } from './style';
import Home from '../../pages/Home';
import { ReactNode } from 'react';

const ScrollPagesComponent = ({ children }: { children: ReactNode }) => {
  return (
    <StyledScrollPages>
      <div>
        <Home />
        <div className='container--principal-content'>
          {children}
          <p className='container--content-techs'>
            Coded in <strong>Visual Studio Code</strong>. Built with
            <strong>React</strong> and <strong>Styled Components</strong>,
            <strong>Axios</strong> for accessing the{' '}
            <strong>GitHub API </strong>
            deployed with <strong>Vercel</strong>. All text is set in the
            Lexend, and Montserrat typefaces.
          </p>
        </div>
      </div>
    </StyledScrollPages>
  );
};

export default ScrollPagesComponent;
