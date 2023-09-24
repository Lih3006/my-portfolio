import HelloComponent from '../../components/HelloComponent';
import { StyledStartContainer } from './style';
import { stackData } from '../../utils/stackData';

const Start = () => {
  return (
    <StyledStartContainer>
      <HelloComponent />
      <div className='container--start'>
        <h2 className='container--start container--start-title'>My Techs</h2>
        <ul className='container--techs-list'>
          {stackData.map((stack) => {
            return (
              <li className='container--techs-item' key={stack.title}>
                <div className='container--techs-icom'>
                  <div className='container--techs-name'>{stack.title}</div>
                  {<stack.reactIcon />}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </StyledStartContainer>
  );
};

export default Start;
