import React from 'react';

import logo from '../../media/logo.png';
import { Bkg, Container } from './styles';

function Header() {
  return (
    <Container>
      <div>
          <img src={logo} alt="background-zver"/>
          <h3>Nós compartilhamos lucros.</h3>
        </div>
      <Bkg />
    </Container>
  )
}

export default Header;