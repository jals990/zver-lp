import React from 'react';

import logo from '../../media/icone.png'
import { Container } from './styles';

function Footer() {
  return (
    <Container id="contato">
      <div>
        <img src={logo} alt="Share Capital" />
      </div>
      <strong>Rua Vergueiro, 1421, Cj 413 Torre Sul. Paraíso. São Paulo-SP. 04101-000.</strong>
    </Container>
  )
}

export default Footer;