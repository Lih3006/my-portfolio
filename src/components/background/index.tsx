import { StyledBackground } from './style';
import { Star } from './Stars';
import { ReactNode } from 'react';

const Background = ({ children }: { children: ReactNode }) => {
  return (
    <StyledBackground>
      <Star />
      {children}
    </StyledBackground>
  );
};

export default Background;
