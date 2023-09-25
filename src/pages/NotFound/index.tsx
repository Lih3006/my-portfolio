import { StyledNotFoundPage } from './style';
import error from '../../images/error.svg';
import Background from '../../components/background';
import { Link } from 'react-router-dom';

const NoutFoundPage = () => {
  return (
    <StyledNotFoundPage>
      <Background>
        <img src={error} alt='Page Not Found' />
        <Link to='/'>Home</Link>
      </Background>
    </StyledNotFoundPage>
  );
};

export default NoutFoundPage;
