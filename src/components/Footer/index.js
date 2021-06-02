import React from 'react';

import logo from '../../media/logo.png'
import { Container } from './styles';

function Footer() {
  return (
    <Container id="contato">
      <div>
        <img src={logo} alt="ZVER Capital" />
        <ul>
          <li>
            <strong>Gil Watanabe</strong>
            <small>(11)00000-0000</small>
            <small>gil@zver.capital</small>
          </li>
          <li>
            <strong>Montanari</strong>
            <small>(11)00000-0000</small>
            <small>montanari@zver.capital</small>
          </li>
          <li>
            <strong>Roberto</strong>
            <small>(11)00000-0000</small>
            <small>roberto@zver.capital</small>
          </li>
        </ul>
      </div>
      <strong>Rua Vergueiro, 1421, Cj 413 Torre Sul. Paraíso. São paulo-SP. 04101-000.</strong>
    </Container>
  )
}

export default Footer;