import { StyledBackground } from './style';
import { Star } from './Stars';

const Background = ({ children }) => {
  return (
    <StyledBackground>
      <Star />
      {children}
    </StyledBackground>
  );
};

export default Background;
