import { StyledAboutContainer } from './style';

const About = () => {
  return (
      <StyledAboutContainer id='#about'>
        <div className='container--about'>
          <h2 className='container--about container--about-title'>ABOUT</h2>
          <p className='container--about container--about-text'>
            Over the past year, I made the decision to transition from engineering
            to programming, and this choice has proven to be the best one of my
            life. Combining my passion for solving complex problems with the
            independence to implement solutions through programming has been
            rewarding.
          </p>
          <p className='container--about container--about-text'>
            Currently, my focus is on web development, where I highly value
            teamwork because I believe that "alone we go faster, but together we
            go further." I am committed to exploring everything from creating
            enhanced interfaces to developing APIs and managing databases. My
            journey has been fascinating, and I am eager to deepen my knowledge in
            this constantly evolving field.
          </p>
          <p className='container--about container--about-text'>
            In my free time, I enjoy taking morning walks in the park, where
            nature inspires and balances me. I play with my dogs, and I like to
            visit thermal baths and lakes with my husband, enjoying tranquility
            and well-being together. These activities enrich my life,
            complementing my exciting journey in the world of programming.
          </p>

        </div>
        <h3 className='container--about-text'>
          Languages : </h3> <p className='container--about-text'>German, English, Portuguese</p>
        <h3 className='container--about-text'>
          Location:
        </h3>
        <p className='container--about-text'>Duisburg, Germany</p>
      </StyledAboutContainer>
  );
};

export default About;
