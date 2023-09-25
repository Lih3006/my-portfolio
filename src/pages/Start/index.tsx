import HelloComponent from '../../components/HelloComponent';
import { StyledStartContainer } from './style';
import { stackData } from '../../utils/stackData';

const Start = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const pageId = e.currentTarget.getAttribute('href');
    if (pageId) {
      const anchorTarget = document.getElementById(pageId);
      anchorTarget?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  return (
    <StyledStartContainer>
      <HelloComponent />
      <div className='container--start'>
        <h2 className='container--start container--start-title'>My Techs</h2>
        <div className='container--techs-scroll'>
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
      </div>
      <a href='#home' className='anchor--goDown' onClick={handleClick}>
        <i className='fa-solid fa-angles-down'></i>
      </a>
    </StyledStartContainer>
  );
};

export default Start;
