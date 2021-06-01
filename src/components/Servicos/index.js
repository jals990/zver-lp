import React from 'react';

import borderGold from '../../media/border-gold.png';
import { Container } from './styles';

function Servicos() {
  return (
    <Container>
      <h3 className="divisor">Onde atuamos</h3>
      <small>conheça nosso portifólio</small>
      <div>
        <ul>
          <li>
            <img src={borderGold} alt="border-gold" />
            <h4>Juros e DI</h4>
            <p>Captação de recursos, etc.</p>
          </li>
          <li>
            <img src={borderGold} alt="border-gold" />
            <h4>Mercados futuros</h4>
            <p>Dólar, mini dólar. Indíce, mini indíce</p>
          </li>
          <li>
            <img src={borderGold} alt="border-gold" />
            <h4>Ações</h4>
            <p>Captação de recursos, etc.</p>
          </li>
          <li>
            <img src={borderGold} alt="border-gold" />
            <h4>Opções</h4>
            <p>Captação de recursos, etc.</p>
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Servicos;