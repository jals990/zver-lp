import React from 'react';

import { Container } from './styles';
import icone from '../../media/icone.png';

function Bio() {
  return (
    <Container id="trabalho">
      <h3 className="divisor">Como trabalhamos</h3>
      <ul>
        <li>
          <div>
            <img src={icone} alt="bio 1"/>
            <h3>Acompanhamento Profissional</h3>
          </div>
          <p>Equipe de gestores altamente capacitada acompanhando de perto cada real investido..</p>
        </li>
        <li>
          <div>
            <img src={icone} alt="bio 1"/>
            <h3>Proteção Patrimonial</h3>
          </div>
          <p>Será cobrada taxa de performance somente em caso de evolução patrimonial. Caso ocorra redução trabalharemos para recompor a carteira vencedora.</p>
        </li>
        <li>
          <div>
            <img src={icone} alt="bio 1"/>
            <h3>Transparência nas negociações</h3>
          </div>
          <p>Acompanhe diariamente as movimentações através do aplicativo da corretora.</p>
        </li>
      </ul>
    </Container>
  )
}

export default Bio;