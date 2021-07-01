import React, { useRef } from 'react';
import download from 'downloadjs';
import { Dropdown } from 'rsuite';
import * as htmlToImage from 'html-to-image';

import { Container } from './styles';

import icone from '../../media/icone.png';

function Navbar() {
  const ref = useRef();

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
  }

  function print(){
    htmlToImage.toPng(ref.current)
    // .then((dataUrl) => dataURLtoFile(dataUrl, 'comprovante.png'))
    .then((dataUrl) => download(dataUrl)); 
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