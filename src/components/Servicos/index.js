import React from 'react';

import atuacao from '../../media/atuacao.jpeg';
import { Container } from './styles';

function Servicos() {
  return (
    <Container id="atuacao">
      <img src={atuacao} alt="atuacao" />
      <div>
        <h3>Onde atuamos</h3>
        <ul>
          <li>
            <h4>Juros e DI</h4>
            <p>Captação de recursos, etc.</p>
          </li>
          <li>
            <h4>Mercados futuros</h4>
            <p>Dólar, mini dólar. Indíce, mini indíce</p>
          </li>
          <li>
            <h4>Ações</h4>
            <p>Captação de recursos, etc.</p>
          </li>
          <li>
            <h4>Opções</h4>
            <p>Captação de recursos, etc.</p>
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Servicos;