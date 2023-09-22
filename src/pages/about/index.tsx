import { StyledAboutContainer } from './style';

const About = () => {
  return (
    <StyledAboutContainer>
      <div className='container--about'>
        <h2 className='container--about container--about-title'>ABOUT</h2>
        <p className='container--about container--about-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos laborum
          ea cumque magnam mollitia, ipsam ut, doloribus molestias autem
          dolores, iusto ad corrupti accusantium rerum praesentium! Nostrum
          autem provident dignissimos.
        </p>
        <p className='container--about container--about-text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          libero tenetur vero repellendus, temporibus odio error exercitationem
          perspiciatis quae quia? Officia iure commodi reiciendis, voluptatum
          nobis sit laborum vero. Autem.
        </p>
        <p className='container--about container--about-text'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero ratione
          nostrum labore quisquam cumque voluptatem, perferendis consectetur
          totam sequi architecto autem esse ea ipsa maiores distinctio
          recusandae numquam iusto excepturi?
        </p>
      </div>
    </StyledAboutContainer>
  );
};

export default About;
