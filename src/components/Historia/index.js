import React from 'react';
import { GoGraph } from 'react-icons/go';
import { GiReceiveMoney } from 'react-icons/gi';
import { Container } from './styles';

function Historia() {
  return (
    <Container id="historia">
      <div>
        <div className="intro">
          <div className="intro-img" />
          <div className="icon">
            <h3>Share Capital é você no comando do seu ganho.</h3>
            <div>
              <GoGraph />
              <p>Quando o mercado oscila, o risco é todo seu. </p>
            </div>
            <div>
              <GiReceiveMoney />
              <p>Quando o mercado ganha, você fica com a menor parte.</p>
            </div>
            <p className="oportunidade">Se você não consegue sair desse círculo vicioso, agora é a sua oportunidade ...</p>
          </div>
        </div>

        {/* <div className="context">
          <p>Na Share Capital você não é mais um. Você se torna sócio dos gestores. E o melhor de tudo: o experitse é nosso, mas quem está no comando do investimento é você, acompanhando passo a passo os ganhos reais.</p> 
          <p>Mas nada disso acontece por acaso.</p>
          <p>Nossa profunda experiência e visão global, aliada à compreensão local, nos tornam a escolha certa para investidores, parceiros e empresários.</p>
          <p>Nascemos num primeiro momento, com o objetivo de proporcionar a pequenos e médios investidores a oportunidade de diversificar suas aplicações para obter rentabilidades mais atrativas do que as oferecidas no mercado atual, maximizando resultados e minimizando riscos, sempre com a principal meta de preservar o patrimônio investido.</p>
          <p>As rentabilidades oferecidas pelos grandes Bancos não estão sendo atrativas para clientes com perfil mais arrojado, o que engessa o seu patrimônio. Nós, da SHARE queremos potencializar seu patrimônio de uma maneira mais ágil e significativa.</p>
          <p>O conhecimento em diversos setores da economia capacita a Share Capital a proporcionar retornos competitivos e consistentes de forma responsável.</p>
          <p>Veja mais como é possível compartilhar bons rendimentos sem abrir mão da segurança e confiabilidade.</p>
        </div> */}
      </div>
    </Container>
  )
}

export default Historia;