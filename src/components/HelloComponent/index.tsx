import { useEffect } from 'react';
import { StyledHelloCompoment } from './style';
import { useParams, useNavigate } from 'react-router-dom';

const HelloComponent = () => {
  const navigate = useNavigate();
  const userParam = useParams();
  const username = userParam.username;

  useEffect(() => {
    if (username) {
      if (username?.split('!')[0] !== '' && username?.length > 0) {
        navigate('*');
      }
    }
  });

  return (
    <StyledHelloCompoment>
      <div className='container--content'>
        <p className='container--content-text-fixed'>Hello</p>
        <ul className='container--content-list'>
          <li className='container--content-list-item'>world ! </li>
          <li className='container--content-list-name'>
            {username?.split('!')[1] === '' ||
            username?.split('')[0] !== '!' ||
            username.length > 15
              ? 'Team'
              : username.split('!')[1]}
            &nbsp;!
          </li>
          <li className='container--content-list-item'>users ! </li>
          <li className='container--content-list-item'>everybody!</li>
        </ul>
      </div>
    </StyledHelloCompoment>
  );
};

export default HelloComponent;
