import React from 'react';
import { Container } from './styles';

import Navbar from '../../components/Navbar';
import Header from './../../components/Header';
import Bio from './../../components/Bio';
import Servicos from './../../components/Servicos';
import Historia from './../../components/Historia';
import Modal from './../../components/Modal';
import Premium from './../../components/Premium';
import Footer from './../../components/Footer';

function Home() {
  return (
    <Container>
      <Navbar />
      <Header />
      <Historia />
      <Bio />
      <Servicos />
      {/* <Modal /> */}
      <Premium />
      <Footer />    
    </Container>
  )
}

export default Home;