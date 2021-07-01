import React from 'react';
import { BarGauge, Label, Tooltip, Export, Title, Font, Legend } from 'devextreme-react/bar-gauge';

import { Container } from './styles';

function Performance() {
  const values = [82.4, 41.1, 35.4, 15.9, 7.79, 1.2];

  const formatPlayer = e =>
    e.toString()
    .replace(0, "Share")
    .replace(1, "XP Inc")
    .replace(2, "Genial")
    .replace(3, "Modal")
    .replace(4, "Bovespa")
    .replace(5, "Poupança")

  function customizeTooltip(arg) {
    return {
      text: getText(arg, arg.valueText)
    };
  }

  function customizeText(arg) {
    return getText(arg.item, arg.text);
  }

  function getText(item, text) {
    return `${formatPlayer(item.index)} - ${text}%`;
  }

  return (
    <Container id="performance">
      <h3 className="divisor">Resultados Share 2021</h3>

      <div className="combo">
        <BarGauge
          id="gauge"
          startValue={0}
          endValue={100}
          defaultValues={values}
          palette="Green Mist"
        >
          <Label visible={false} />
          <Tooltip enabled={true}  customizeTooltip={e => customizeTooltip(e)}/>
          <Export enabled={true} />
          <Title text="Performance acumulada comparativa">
            <Font size={28} />
          </Title>
          <Legend visible={true} customizeText={e => customizeText(e)} verticalAlignment="bottom" horizontalAlignment="center"/>
        </BarGauge> 
        <div className="indicadores">
          <h3>Volume financeiro por conjunto</h3>
          <ul>
            <li>
              <strong>Juros e DI</strong>
              <p>R$ 47.900,00</p>
            </li>
            <li>
              <strong>Mercados futuros</strong>
              <p>R$ 47.900,00</p>
            </li>
            <li>
              <strong>Ações</strong>
              <p>R$ 47.900,00</p>
            </li>
            <li>
              <strong>Opções</strong>
              <p>R$ 47.900,00</p>
            </li>
          </ul>
          <small>*saldo inicial R$ 150.000,00</small>
        </div>
      </div>
    </Container>
  )
}

export default Performance;