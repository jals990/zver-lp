import React from 'react';
import { Dropdown } from 'rsuite';

import { Container } from './styles';

import icone from '../../media/icone.png';

function Navbar() {
  return (
    <Container>
      <img src={icone} alt="Zver Capital" />
        <Dropdown title="Menu">
          <a href="#historia"><Dropdown.Item>Quem Somos</Dropdown.Item></a>
          <a href="#atuacao"><Dropdown.Item>Onde atuamos</Dropdown.Item></a>
          <a href="#trabalho"><Dropdown.Item>Como trabalhamos</Dropdown.Item></a>
          <a href="#performance"><Dropdown.Item>Performance</Dropdown.Item></a>
          <a href="#premium"><Dropdown.Item>Serviços Premium</Dropdown.Item></a>
          <a href="#contato"><Dropdown.Item>Contatos</Dropdown.Item></a>
        </Dropdown>
    </Container>
  )
}

export default Navbar;