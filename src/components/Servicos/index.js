import React, { useRef } from 'react';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';
import { v4 as uuidv4 } from 'uuid';
import atuacao from '../../media/atuacao.jpg';
import { Container } from './styles';

function Servicos() {
  const ref = useRef();
  const id = uuidv4();
  function print(){
    htmlToImage.toPng(ref.current)
    .then(function (dataUrl) {
      download(dataUrl, `${id}.png`);
    }); 
  }

  return (
    <Container id="atuacao" ref={ref}>
      <img src={atuacao} alt="atuacao" />
      <div>
        <h3>Onde atuamos</h3>
        <ul>
          <li>
            <h4>Juros e DI</h4>
            <p>Captação de recursos, etc.</p>
          </li>
          <li>
            <h4>Mercados futuros</h4>
            <p>Dólar, mini dólar. Indíce, mini indíce</p>
          </li>
          <li>
            <h4>Ações</h4>
            <p>Captação de recursos, etc.</p>
          </li>
          <li>
            <h4>Opções</h4>
            <p>Captação de recursos, etc.</p>
              <button onClick={() => print()}>
                Clique
              </button>
          </li>
        </ul>
      </div>
    </Container>
  )
}

export default Servicos;