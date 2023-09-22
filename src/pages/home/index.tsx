import { StyledHomeContainer } from './style';

const About = () => {
  return (
    <StyledHomeContainer>
      <div className='container--header'>
        <div className='container--header container--header-info'>
          <h1 className='container--header container--header-title'>
            I'm <span>Aline Mendonca</span>
          </h1>
          <h2 className='container--header container--header-subtitle'>
            FullStack Developer
          </h2>
          <p className='container--header container--header-text'>
            I focus on building web-based products that are designed with
            accessibility in mind, making them available and welcoming to
            everyone.
          </p>
        </div>
        <nav>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
          <a href='#Experience'>Experience</a>
        </nav>
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
      </div>
    </StyledHomeContainer>
  );
};

export default About;
