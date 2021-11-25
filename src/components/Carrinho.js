import React, { Component } from 'react'
import styled from 'styled-components'


const ItemCarrinho = styled.div` 
border: 1px solid black;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1%;
margin: 0.8%;
background-color: #D8DCD6;
button{
  cursor: pointer;
}
`
const CarrinhoTotal = styled.div`
display: flex;
align-items: center;
padding: 1%;
p{
  margin-right: 1%;
}
button{
  cursor: pointer;
  margin-right: 1%;
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
      return <ItemCarrinho> <p>{item.title}</p>
        <p>{`R$${item.price} `}</p>
        <button onClick={() => this.removerItem(item.id)}>Remover</button>
      </ItemCarrinho>
    })

    let resultado = <CarrinhoTotal>
      <p>{`Total: R$${this.props.carrinho.valorTotal}`}</p>
      <button onClick={this.finalizarCompra}>Finalizar Compra</button>

      <button onClick={() => this.props.invocarTela("contratarUmNinja")}>Voltar Para Lista</button>
    </CarrinhoTotal>

    return (
      <div>
        {this.props.carrinho.produtos.length > 0 ? itens : <h1>Carrinho</h1>}
        {this.props.carrinho.produtos.length > 0 ? resultado : ' '}
      </div>
    )
  }
}