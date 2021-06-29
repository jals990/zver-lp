import React from 'react';

import logo from '../../media/logo.png';
import globe from '../../media/globe.jpg';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <div>
          <img src={logo} alt="background-zver"/>
          <h3>Nós compartilhamos lucros.</h3>
        </div>
        <img src={globe} alt="background-zver"/>
    </Container>
  )
}

export default Header;