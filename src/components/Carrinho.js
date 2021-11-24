import React, { Component } from 'react'
import styled from 'styled-components'


const ItemCarrinho=styled.div` 
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
const CarrinhoTotal=styled.div`
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
  state={
    carrinho:[
      {
        nome:"tst",
        preço:200,
      },
        {
        nome:"tst",
        preço:200,
      },
        {
        nome:"tst",
        preço:200,
      },
        {
        nome:"tst",
        preço:900,
      },
  ], 
  total:0
  }
  render() {
    let soma=0
    let valorTotal = this.state.carrinho.map((valor) => {
      soma = valor.preço + soma
      return soma
    })
    let valorResultante=valorTotal.pop()
    console.log(valorTotal,valorResultante)
    let itens=this.state.carrinho.map((item)=>{
      return  <ItemCarrinho>
        <p>{item.nome}</p>
        <p>{`R$${item.preço} `}</p>
        <button>Remover</button>
      </ItemCarrinho>
    })
    let resultado=<CarrinhoTotal>
      <p>{`Total: R$${valorResultante}`}</p>
      <button>Finalizar Compra</button>
      <button onClick={() => this.props.invocarTela("contratarUmNinja")}mm>Voltar Para Lista</button>
      </CarrinhoTotal>
    return (
      <div>
      {this.state.carrinho.length>0? itens  : <h1>Carrinho</h1> }
      {this.state.carrinho.length>0? resultado : ' ' }

      </div>
    )
  }
}