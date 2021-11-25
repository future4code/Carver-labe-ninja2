import React from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import styled from "styled-components";
import CardQueroContratar from "../CardQueroContratar";

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

// const Card = styled.div`
//   width: 100%;
//   height: 20vh;
//   border: 1px solid black;
//   grid-auto-flow: row;
//   border: 1px solid blue;
// `;

export default class SecaoContratar extends React.Component {
  state = {
    busca: "",
    precoMin: "",
    precoMax: "",
    ordem: ""
  }

  filtroBusca = (event) => {
    this.setState({ busca: event.target.value })
  }

  filtroPrecoMin = (event) => {
    this.setState({ precoMin: event.target.value })
  }

  filtroPrecoMax = (event) => {
    this.setState({ precoMax: event.target.value })
  }

  ordenacao = (event) => {
    this.setState({ ordem: event.target.value })
  }

  
  render() {

    console.log("carrinho", this.props.carrinho)

    const servicos = this.props.anuncios.filter((servico) => {
      return servico.title.toLowerCase().includes(this.state.busca.toLowerCase()) || servico.description.toLowerCase().includes(this.state.busca.toLowerCase())
    }).filter((servico) => {
      return this.state.precoMin === "" || servico.price >= this.state.precoMin
    }).filter((servico) => {
      return this.state.precoMax === "" || servico.price <= this.state.precoMax
    }).sort((a, b) => {
      switch (this.state.ordem) {
        case "nenhum":
          break;
        case "precoMin":
          return a.price - b.price;
        case "precoMax":
          return b.price - a.price;
        case "title":
          return a.title.localeCompare(b.title);
        case "dueDate":
          return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
        default:
          break;
      }
    }).map((servico) => {
      return <CardQueroContratar
        servico={servico}
        addCarrinho={this.props.addCarrinho}/>
       
        
    })

    return (

      <div>
        <AreaFiltros>
          <input type="number" value={this.state.precoMin} onChange={this.filtroPrecoMin} placeholder="Valor Mínimo" />
          <input type="number" value={this.state.precoMax} onChange={this.filtroPrecoMax} placeholder="Valor Máximo" />
          <input type="text" value={this.state.busca} onChange={this.filtroBusca} placeholder="Busca por Título ou Seleção" />

          <select name="ordem"
            value={this.state.ordem}
            onChange={this.ordenacao}>
            <option value="nenhum" selected>Sem Ordenação</option>
            <option value="precoMin">Menor Valor</option>
            <option value="precoMax">Maior Valor</option>
            <option value="title">Título</option>
            <option value="dueDate">Prazo</option>
          </select>
        </AreaFiltros>
        <AreaCard>
          {servicos}
          
        </AreaCard>
      </div>
    );
  }
}
