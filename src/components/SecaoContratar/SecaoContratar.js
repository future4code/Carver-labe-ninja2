import React from "react";
import styled from "styled-components";
import CardQueroContratar from "../CardQueroContratar";
import Carregar from '../Carregar';

const Pai = styled.div`
  background: url('https://images.pexels.com/photos/5871215/pexels-photo-5871215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=300') repeat; 

  @media screen and (max-device-width : 480px){
    background-size: cover;
  }

  @media screen and (max-device-width : 800px){
    margin-bottom: 5%;
  }
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

  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5%;
    
    input, select{
      height: 10%;
      width: 90%;
      font-size: 5vw;
    }

    input{
      border: none;
    }
  }

  @media screen and (max-device-width : 800px){
    grid-template-columns: repeat(4, 1fr);

    input, select{
      height: 3vw;
      width: 95%;
      margin: 4% auto;

    }
  }

`;
  const AreaCard = styled.div`
    padding-bottom: 12vh;
    margin-top: 2%;
    width: 100%;
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(4, 48vh);
    justify-content: space-evenly;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding-bottom: 1vh;
  }

  @media screen and (max-device-width : 800px){
    grid-template-columns: repeat(3, 1fr);
    margin: 0;
  }
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
        addCarrinho={() => this.props.addCarrinho(servico)} />


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
        {this.props.anuncios.length
          > 0 ? '' : <Carregar />}
        <AreaCard>
          {servicos}
        </AreaCard>
      </Pai>
    );
  }
}
