import me from '../../images/me.svg';
import { StyledFooterComponent } from './style';

const Footer = () => {
  const width = window.innerWidth;
  console.log(width / 438);
  return (
    <StyledFooterComponent>
      <img src={me} alt='' />
    </StyledFooterComponent>
  );
};

export default Footer;
