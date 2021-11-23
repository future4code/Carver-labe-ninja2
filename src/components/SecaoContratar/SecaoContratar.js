import React from "react";
import styled from "styled-components";

const AreaFiltros = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 48vh);
  justify-content: space-evenly;
  margin-top: 1%;

  input {
    width: 100%;
  }

  select {
    width: 100%;
  }
`;
const AreaCard = styled.div`
  margin-top: 2%;
  width: 100%;
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(4, 48vh);
  justify-content: space-evenly;
`;

const Card = styled.div`
  width: 100%;
  height: 20vh;
  border: 1px solid black;
  grid-auto-flow: row;
`;

export default class SecaoContratar extends React.Component {
  render() {
    return (
      <div>
        <AreaFiltros>
          <input type="text" value="" placeholder="Valor Mínimo" />
          <input type="text" value="" placeholder="Valor Máximo" />
          <input
            type="text"
            value=""
            placeholder="Busca por Título ou Seleção"
          />
          <select>
            <option selected>Sem Ordenação</option>
            <option>Menor Valor</option>
            <option>Maior Valor</option>
            <option>Título</option>
            <option>Prazo</option>
          </select>
        </AreaFiltros>
        <AreaCard>
          <Card>Card</Card>
          <Card>Card</Card>
          <Card>Card</Card>
          <Card>Card</Card>
          <Card>Card</Card>
          <Card>Card</Card>
          <Card>Card</Card>
          <Card>Card</Card>
          <Card>Card</Card>
          <Card>Card</Card>
          <Card>Card</Card>
          <Card>Card</Card>
        </AreaCard>
      </div>
    );
  }
}
