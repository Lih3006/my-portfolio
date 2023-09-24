import me from '../../images/me.svg';
import { StyledFooterComponent } from './style';

const Footer = () => {
  return (
    <StyledFooterComponent>
      <img src={me} alt='' />
    </StyledFooterComponent>
  );
};

export default Footer;
