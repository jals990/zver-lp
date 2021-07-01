import React from 'react';

import logo from '../../media/icone.png';
import { Bkg, Container } from './styles';

function Header() {
  return (
    <Container>
      <div>
        <img src={logo} alt="background-share"/>
        <h3>Nós compartilhamos lucros.</h3>
      </div>
      <Bkg />
    </Container>
  )
}

export default Header;