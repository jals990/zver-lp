import React, { useRef } from 'react';
import download from 'downloadjs';
import { Dropdown } from 'rsuite';
import * as htmlToImage from 'html-to-image';

import { Container } from './styles';

import icone from '../../media/icone.png';

function Navbar() {
  const ref = useRef();
  const localFile = localStorage;

  function dataURLtoFile(dataUrl) {
    localFile.setItem("receipt", dataUrl)
    const fileLocale = localFile.getItem("receipt")
    // localFile.removgiteItem("receipt")
    return fileLocale
  }

  function print(){
    htmlToImage.toPng(ref.current)
    .then((dataUrl) => dataURLtoFile(dataUrl))
    .then(download);
  }


  return (
    <Container>
      <img src={icone} alt="Share Capital" ref={ref}/>
      <button type="button" onClick={() => print()}>clique</button>
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