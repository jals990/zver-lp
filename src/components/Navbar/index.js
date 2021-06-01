import React from 'react';
import { Dropdown } from 'rsuite';

import { Container } from './styles';

import icone from '../../media/icone.png';

function Navbar() {
  return (
    <Container>
      <img src={icone} alt="Zver Capital" />
        <Dropdown title="Menu">
          <Dropdown.Item>Quem Somos</Dropdown.Item>
          <Dropdown.Item>Produtos</Dropdown.Item>
          <Dropdown.Item>Performance</Dropdown.Item>
          <Dropdown.Item>Serviços Premium</Dropdown.Item>
          <Dropdown.Item>Clientes</Dropdown.Item>
          <Dropdown.Item>Contatos</Dropdown.Item>
        </Dropdown>
    </Container>
  )
}

export default Navbar;