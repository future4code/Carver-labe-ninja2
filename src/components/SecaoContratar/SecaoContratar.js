import React from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import styled from "styled-components";
import CardQueroContratar from "../CardQueroContratar";

const Pai = styled.div`
  background: url('https://images.unsplash.com/photo-1602104623433-2dd8b8b35548?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80');
`


const AreaFiltros = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 48vh);
  justify-content: space-evenly;

  input, select {
    height: 2vw;
    padding: 0.2vw;
    border:none;
    border-bottom: 2px solid black;
    outline: none;
    margin-top: 10px;
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
        invocarTela={this.props.invocarTela}
        servico={servico}
        addCarrinho={() => this.props.addCarrinho(servico)}/>
       
        
    })

    return (

      <Pai>
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
      </Pai>
    );
  }
}
