import { StyledNotFoundPage } from './style';
import error from '../../images/error.svg';
import error1 from '../../images/error1.svg';
import Background from '../../components/background';
import { Link } from 'react-router-dom';

const NoutFoundPage = () => {
  return (
    <StyledNotFoundPage>
      <Background>
        <img className='img--mobile' src={error1} alt='Page Not Found' />
        <img className='img--desktop' src={error} alt='Page Not Found' />
        <Link to='/'>Home</Link>
      </Background>
    </StyledNotFoundPage>
  );
};

export default NoutFoundPage;
