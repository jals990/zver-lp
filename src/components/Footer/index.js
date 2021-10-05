import React from 'react';

import logo from '../../media/logo.png'
import { Container } from './styles';

function Footer() {
  return (
    <Container id="contato">
      <div>
        <img src={logo} alt="Share Capital" />
      </div>
      <strong>Rua Vergueiro, 1421, Cj 413 Torre Sul. Paraíso. São Paulo-SP. 04101-000.</strong>
      <strong>share.capital001@gmail.com</strong>
      <center>Disclaimer:
A Share Capital NÃO recomenda em hipótese alguma que você coloque todo o seu patrimônio em um só lugar. Investimentos possuem riscos e podem acarretar perda parcial ou total dos valores investidos. Diversificar sempre diminui seus riscos. Todo investimento possui riscos. FUNDOS DE INVESTIMENTOS não contam com garantia do administrador do fundo, do gestor da carteira, de qualquer mecanismo de seguro ou ainda do Fundo Garantidor de Créditos – FGC. Não há nenhum tipo de investimento que seja 100% livre de riscos. Rentabilidade passada não é garantia de rentabilidade futura.</center>
    </Container>
  )
}

export default Footer;