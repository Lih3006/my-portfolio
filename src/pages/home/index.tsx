import { userData } from '../../utils/userData';
import { api } from '../../services/api';
import { StyledHomeContainer } from './style';
import { useEffect, useState } from 'react';
import { IUserProfile } from '../../providers/projectProvider';
const Home = () => {
  const [userProfile, setUserProfile] = useState<IUserProfile>();
  useEffect(() => {
    const getUser = async () => {
      const user = await api.get(`/users/${userData.githubUser}`);
      setUserProfile(user.data);
    };
    getUser();
  }, []);

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
    <StyledHomeContainer>
      <div className='container--header container--header-info'>
        <h1 className='container--header container--header-title'>
          I'm
          <span className='container--header container--header-hover'>
            <img
              className='container--header container--header-image'
              src={userProfile?.avatar_url}
              alt='profile_img'
            />
            &nbsp; Aline Mendonça
          </span>
        </h1>
        <h2 className='container--header container--header-subtitle'>
          FullStack Developer
        </h2>
        <p className='container--header container--header-text'>
          I focus on building web-based products that are designed with
          accessibility in mind, making them available and welcoming to
          everyone.
        </p>
        <nav>
          <a href='#about' onClick={handleClick}>
            <span className='nav-indicator-hover'>-----</span>
            <span className='nav-indicator-text'>ABOUT</span>
          </a>
          <a href='#projects' onClick={handleClick}>
            <span className='nav-indicator-hover'>-----</span>
            <span className='nav-indicator-text'>PROJECTS</span>
          </a>
          <a href='#experience' onClick={handleClick}>
            <span className='nav-indicator-hover'>-----</span>
            <span className='nav-indicator-text'>EXPERIENCE</span>
          </a>
        </nav>
      </div>

      <div className='container--header container--header-media'>
        <a href='https://github.com/Lih3006' target='_blank'>
          <i className='fa-brands fa-github'></i>
        </a>
        <a href='https://www.linkedin.com/in/abmendonca/' target='_blank'>
          <i className='fa-brands fa-linkedin'></i>
        </a>
        <a href='mailto:alineb3006@hotmail.com'>
          <i className='fa-regular fa-envelope'></i>
        </a>
        <a
          href='
https://wa.me/+4915112802241?text=Hello!%20Please%20leave%20your%20message,%20and%20I%20will%20get%20back%20to%20you%20shortly.%20Have%20a%20great%20day!
'
          target='_blank'
        >
          <i className='fa-brands fa-whatsapp'></i>
        </a>
      </div>
    </StyledHomeContainer>
  );
};

export default Home;
