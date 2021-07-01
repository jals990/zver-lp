import React from 'react';
import atuacao from '../../media/atuacao.jpg';
import { Container } from './styles';

function Servicos() {
  return (
    <Container id="atuacao" >
      <img src={atuacao} alt="atuacao" />
      <div>
        <h3>Onde atuamos</h3>
        <ul>
          <li>
            <h4>Mercados futuros</h4>
            <p>Dólar, mini dólar. Indíce, mini indíce.</p>
            <p>Taxa de juros <span>(DI).</span></p>
          </li>
          <li>
            <h4>Ações e Opções</h4>
            <p>Captação de recursos, etc.</p>
          </li>
          <li>
            <h4>Mercados Internacionais</h4>
            <p>ETFs e ADRs</p>
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Servicos;