import React from 'react';
import { Panel } from 'rsuite';
import { Container } from './styles';

function Premium() {
  return (
    <Container id="premium">
      <h3 className="divisor">Serviços e produtos Premium</h3>
      <div>
        <Panel shaded bordered bodyFill className="box-panel">
          <img src="https://www.nomus.com.br/blog-industrial/wp-content/uploads/2019/08/gestao-de-portfolio-de-produtos.jpg" height="340" />
          <Panel header="Gerenciamento de Portfólio">
            <p>
              <small>Procuramos nos diferenciar com uma grande combinação de escala, experiência operacional e profundidade no setor financeiro, proporcionando uma vantagem competitiva na criação de um fluxo de operações e negócios atrativos.</small>
            </p>
          </Panel>
        </Panel>
        <Panel shaded bordered bodyFill className="box-panel">
          <img src="https://www.tororadar.com.br/hs-fs/hubfs/Imagens_oswald/coe-certificado-de-operacoes-estruturadas.jpg?width=800&name=coe-certificado-de-operacoes-estruturadas.jpg" height="340" />
          <Panel header="Operações Estruturadas">
            <p>
              <small>A Zver atua na busca de ativos em plataformas regionais e geração escalonável, visando retornos atrativos ajustados ao risco. A certeza de um fluxo de caixa de longo prazo protege dos riscos deste tipo de investimento. Além de originação de ativos atrativos, a Zver busca mercados de alto crescimento realizados de formas sustentáveis.</small>
            </p>
          </Panel>
        </Panel>
        <Panel shaded bordered bodyFill className="box-panel">
          <img src="https://vangardi.com.br/wp-content/uploads/2020/11/private-equity-grafico.jpg" height="340" />
          <Panel header="Private Equity">
            <p>
              <small>No setor de Private Equity, a Zver se concentra em empresas de alto crescimento do Middle Market nos setores financeiros, automotivo, energia e química, variando por região e natureza do negócio e da nossa posição competitiva.</small>
            </p>
          </Panel>
        </Panel>
      </div>
      
    </Container>
  )
}

export default Premium;