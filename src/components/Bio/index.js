import React from 'react';

import { Container } from './styles';

function Bio() {
  return (
    <Container id="trabalho">
      <ul>
        <li>
          <h3>Acompanhamento Profissional</h3>
          <p>Equipe de gestores altamente capacitada acompanhando de perto cada real investido..</p>
        </li>
        <li>
          <h3>Proteção Patrimonial</h3>
          <p>Será cobrada taxa de performance somente em caso de evolução patrimonial. Caso ocorra redução trabalharemos para recompor a carteira vencedora.</p>
        </li>
        <li>
          <h3>Transparência nas negociações</h3>
          <p>Acompanhe diariamente as movimentações através do aplicativo da corretora.</p>
        </li>
      </ul>
    </Container>
  )
}

export default Bio;