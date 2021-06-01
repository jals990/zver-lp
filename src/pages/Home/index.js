import React from 'react';
import { Container } from './styles';

import Navbar from '../../components/Navbar';
import Header from './../../components/Header';
import Bio from './../../components/Bio';
import Servicos from './../../components/Servicos';
import Historia from './../../components/Historia';
import Performance from './../../components/Performance';
import Premium from './../../components/Premium';
import Footer from './../../components/Footer';

function Home() {
  return (
    <Container>
      <Navbar />
      <Header />
      <Bio />
      <Servicos />
      <Historia />
      <Performance />
      <Premium />
      <Footer />    
    </Container>
  )
}

export default Home;