import React, { Component } from 'react'
import styled from 'styled-components'


const ItemCarrinho = styled.div` 
display: flex;
justify-content: space-between;
align-items: center;
padding: 1%;
margin: 0.8%;
margin-bottom: 1.5vw;
background: linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);
border: none;
border-top-left-radius: 30px;
border-bottom-right-radius: 20px;
font-weight: bold;

button{
  background: transparent;
  border: none;
  color: grey
}
`
const CarrinhoTotal = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 1%;
font-weight: bold;

p, button{
  margin-right: 1%;
}

`

const Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 20%;

  button{
    padding: 0.5vw;
    border: 1px solid black;
    background: transparent;
    font-weight: bold;

    &:hover{
      background-color: black;
      color: white;
      font-weight: bold;
     }
  }
`

export default class Carrinho extends Component {

  finalizarCompra = () => {
    alert("obrigada por comprar com a gente!!!!!!!")
    for (let i = 0; i < this.props.carrinho.produtos.length; i++) {
      this.props.atualizarJobs(false, this.props.carrinho.produtos[i].id)
    }
    this.props.invocarTela("contratarUmNinja")
    this.props.atualizarCarrinho([])
  }

  removerItem = (id) => {
    const carrinhoSemItem = this.props.statusCarrinho.produtos.filter((item) => {
      return item.id !== id
    })
    this.props.atualizarJobs(false, id)
    this.props.atualizarCarrinho(carrinhoSemItem)
  }

  render() {
    let itens = this.props.carrinho.produtos.map((item) => {
      return <ItemCarrinho><p>{item.title}</p>
        <p>{`R$${item.price} `}</p>
        <button onClick={() => this.removerItem(item.id)}>X</button>
      </ItemCarrinho>
    })

    let resultado = <CarrinhoTotal>
      <p>{`Total: R$${this.props.carrinho.valorTotal}`}</p>
      <Buttons>
        <button onClick={this.finalizarCompra}>Finalizar Compra</button>
        <button onClick={() => this.props.invocarTela("contratarUmNinja")}>Voltar Para Lista</button>
      </Buttons>
    </CarrinhoTotal>

    return (
      <div>
        {this.props.carrinho.produtos.length > 0 ? itens : <h1>Carrinho</h1>}
        {this.props.carrinho.produtos.length > 0 ? resultado : ' '}
      </div>
    )
  }
}