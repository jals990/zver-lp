import React from 'react';
import { Container } from './styles';

function Performance() {
  return (
    <Container id="performance">
      <h3 className="divisor">Resultados Share 2021</h3>

      <div className="combo">
        <div className="indicadores">
          <h3>Volume financeiro por conjunto</h3>
          <ul>
            <li>
              <strong>Juros e DI</strong>
              <p>R$ 47.900,00</p>
            </li>
            <li>
              <strong>Mercados futuros</strong>
              <p>R$ 47.900,00</p>
            </li>
            <li>
              <strong>Ações</strong>
              <p>R$ 47.900,00</p>
            </li>
            <li>
              <strong>Opções</strong>
              <p>R$ 47.900,00</p>
            </li>
          </ul>
          <small>*saldo inicial R$ 150.000,00</small>
        </div>
      </div>
    </Container>
  )
}

export default Performance;