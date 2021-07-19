import React from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { Container } from './styles';
import consulting from '../../media/japa.jpg';
import clients from '../../media/clients.jpg';

function Historia() {
  return (
    <Container id="historia">
        <div className="intro">
          <div className="intro-img">
            <img src={consulting} alt="Share Capital" />
          </div>
          <div className="intro-escope">
            <span>
              Oferecemos ótimas soluções
            </span>
            <h3>Share Capital é você no comando do seu ganho.</h3>
            <div>
              <p>Quando o mercado oscila, o risco é todo seu. Quando o mercado ganha, você fica com a menor parte. Se você não consegue sair desse círculo vicioso, agora é a sua oportunidade.</p>
            </div>
            <ul>
              <li>
                <GiCheckMark />
                <span>Retornos competitivos e consistentes de forma responsável.</span>
              </li>
              <li>
                <GiCheckMark />
                <span>Proteção patrimonial e transparência nas operações.</span>
              </li>
              <li>
                <GiCheckMark />
                <span>Serviços premium além de sua expectativa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="intro">
          <div className="intro-escope">
            <span>
              Na Share Capital você não é mais um. Você se torna sócio dos gestores.
            </span>
            <h3>Mas nada disso acontece por acaso.</h3>
            <div>
              <p>
                Nossa profunda experiência e visão global, aliada à compreensão local, nos tornam a escolha certa para investidores, parceiros e empresários.
                Nascemos num primeiro momento, com o objetivo de proporcionar a pequenos e médios investidores a oportunidade de diversificar suas aplicações para 
                obter rentabilidades mais atrativas do que as oferecidas no mercado atual, maximizando resultados e minimizando riscos, sempre com a principal meta 
                de preservar o patrimônio investido.
                As rentabilidades oferecidas pelos grandes Bancos não estão sendo atrativas para clientes com perfil mais arrojado, o que engessa o seu patrimônio. 
                Nós, da SHARE Capital queremos potencializar seu patrimônio de uma maneira mais ágil e significativa. O conhecimento em diversos setores da economia capacita 
                a Share Capital a proporcionar retornos competitivos e consistentes de forma responsável.
              </p>
            </div>
            <div>
              <p>E o melhor de tudo: o experitse é nosso, mas quem está no comando do investimento é você, acompanhando passo a passo os ganhos reais.</p>
            </div>
          </div>
          <div className="client-img">
            <img src={clients} alt="Share Capital" />
          </div>
        </div>
        
        <h4>Veja mais como é possível compartilhar bons rendimentos </h4>
        <span>sem abrir mão da segurança e confiabilidade.</span>
        
    </Container>
  )
} 

export default Historia;