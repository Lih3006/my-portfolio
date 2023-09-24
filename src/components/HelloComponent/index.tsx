import { StyledHelloCompoment } from './style';

const HelloComponent = () => {
  const url = window.location.href;
  const urlPart = url.split('!');
  const name = urlPart[urlPart.length - 1];

  return (
    <StyledHelloCompoment>
      <div className='container--content'>
        <p className='container--content-text-fixed'>Hello</p>
        <ul className='container--content-list'>
          <li className='container--content-list-item'>world ! </li>
          <li className='container--content-list-name'>
            {urlPart.length === 1 || name.length > 15 ? 'Team' : name} !
          </li>
          <li className='container--content-list-item'>users ! </li>
          <li className='container--content-list-item'>everybody!</li>
        </ul>
      </div>
    </StyledHelloCompoment>
  );
};

export default HelloComponent;
