import React from 'react'
import SerUmNinja from './components/SerUmNinja'
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Header from './components/Header'
import Home from './components/Home';
import Carrinho  from './components/Carrinho';
import SecaoContratar from "./components/SecaoContratar/SecaoContratar"
import axios from 'axios';
const GlobalStyle = createGlobalStyle`
   *{
	margin: 0;
    padding: 0;
	box-sizing: border-box;
   }
`


class App extends React.Component{
	state = {
		tela: "home",
		anuncios: [
			{
				id: "efed9385-cf87-4f0e-a121-465384b3f2e4",
				title: "Cortar a grama",
				description: "Manutenção em áreas verdes de até 1000 metros quadrados.",
				price: 40,
				paymentMethods: [
				  "PayPal",
				  "boleto"
				],
				dueDate: "2021-12-30T00:00:00.000Z",
				taken: false
			  }
		],
		carrinho: {
			valoTotal:0,
			produtos:[
				{
					"id": "efed9385-cf87-4f0e-a121-465384b3f2e4",
					"title": "Cortar a grama",
					"description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
					"price": 40,
					"paymentMethods": [
					  "PayPal",
					  "boleto"
					],
					"dueDate": "2021-12-30T00:00:00.000Z",
					"taken": false
				  },
				{
					"id": "efed9385-cf87-4f0e-a121-465384b3f2e6",
					"title": "brincar com lama",
					"description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
					"price": 60,
					"paymentMethods": [
					  "PayPal",
					  "boleto"
					],
					"dueDate": "2021-12-30T00:00:00.000Z",
					"taken": false
				  },
				{
					"id": "efed9385-cf87-4f0e-a121-465384b3f2e5",
					"title": "Fazer unha",
					"description": "Manutenção em áreas verdes de até 1000 metros quadrados.",
					"price": 50,
					"paymentMethods": [
					  "PayPal",
					  "boleto"
					],
					"dueDate": "2021-12-30T00:00:00.000Z",
					"taken": false
				  },
			]

		},
		paginaCarrinho:true,
	}

	atualizarCarrinho=(valor)=>{
		console.log(valor)
	this.setState({carrinho:{valoTotal:0, produtos:valor}})
	}

	trocarStatusPaginaCarrinho=()=>{
	this.setState({paginaCarrinho:!this.state.paginaCarrinho})
	}
	
	render(){
		console.log(this.state.paginaCarrinho)
		// let trocarPaginasCarrinho= this.state.paginaCarrinho? <Carrinho 
		// statusCarrinho={this.state.carrinho}  trocarPaginaCarrinho={this.trocarStatusPaginaCarrinho} 
		// atualizarCarrinho={this.atualizarCarrinho} carrinho={this.state.carrinho}/>
		// :
		// <SecaoContratar/>
		return(
			<div>
				<GlobalStyle/>
			<Header/>
				{/*<Home/> */}
				<Carrinho 
		statusCarrinho={this.state.carrinho}  trocarPaginaCarrinho={this.trocarStatusPaginaCarrinho} 
		atualizarCarrinho={this.atualizarCarrinho} carrinho={this.state.carrinho}/>
			</div>
		)
	}
}

export default App