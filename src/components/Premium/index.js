import React from 'react';
import { Panel } from 'rsuite';
import { Container } from './styles';

function Premium() {
  return (
    <Container id="premium">
      <h3>Produtos Premium e Serviços</h3>
      <div>
        <Panel shaded bordered bodyFill className="box-panel">
          <img src="https://vangardi.com.br/wp-content/uploads/2020/11/private-equity-grafico.jpg" height="340" />
          <Panel header="Consultoria de Portfólio">
            <p>
              <small>Procuramos nos diferenciar com uma grande combinação de escala, experiência operacional e profundidade no setor financeiro, proporcionando uma vantagem competitiva.</small>
            </p>
          </Panel>
        </Panel>
        <Panel shaded bordered bodyFill className="box-panel">
          <img src="https://www.tororadar.com.br/hs-fs/hubfs/Imagens_oswald/coe-certificado-de-operacoes-estruturadas.jpg?width=800&name=coe-certificado-de-operacoes-estruturadas.jpg" height="340" />
          <Panel header="Operações Estruturadas">
            <p>
              <small>A Share Capital atua na busca de ativos em plataformas regionais e geração escalonável, visando retornos atrativos ajustados ao risco. A Share Capital busca mercados de alto crescimento realizados de formas sustentáveis.</small>
            </p>
          </Panel>
        </Panel>
        <Panel shaded bordered bodyFill className="box-panel">
          <img src="https://www.nomus.com.br/blog-industrial/wp-content/uploads/2019/08/gestao-de-portfolio-de-produtos.jpg" height="340" />
          <Panel header="Outros Serviços">
              <small>Outros serviços com parceiros estratégicos bem conceituados no mercado: </small>
              <ul>
                <li>Serviços tributários PJ</li>
                <li>Câmbio turismo via fear corretora</li>
                <li>Seguros VIP (carros importados, imóveis acima 1mi)</li>
              </ul>
          </Panel>
        </Panel>
      </div>
      
    </Container>
  )
}

export default Premium;