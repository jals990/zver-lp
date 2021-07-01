import React, { useEffect, useRef, useState } from 'react';
import { base64StringToBlob } from 'blob-util';
import { Dropdown } from 'rsuite';
import * as htmlToImage from 'html-to-image';

import { Container } from './styles';

import icone from '../../media/icone.png';

function Navbar() {
  const ref = useRef();
  const [randon, setRandon] = useState('');

  function dataURLtoFile(dataUrl) {
    setRandon(base64StringToBlob(dataUrl, 'image/png'));
  }

  function print(){
    htmlToImage.toPng(ref.current)
    .then((dataUrl) => dataURLtoFile(dataUrl));
  }

  useEffect(() =>{
    var a = document.getElementById("rnd-print");
    if(a){
      a.click();
    }
  },[randon])

  return (
    <Container>
      <img src={icone} alt="Share Capital" ref={ref}/>
      {randon ? <a href={randon} download id="rnd-print"> </a> : null}
      <button type="button" onClick={() => print()}>test logo</button>
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