import React from 'react';
import me from '../../images/me.svg';

const Footer = () => {
  const width = window.innerWidth;
  console.log(width / 438);
  return (
    <footer>
      <img src={me} alt='' />
    </footer>
  );
};

export default Footer;
