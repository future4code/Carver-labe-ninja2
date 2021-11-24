import React from 'react'
import SerUmNinja from './components/SerUmNinja'
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Header from './components/Header'
import Home from './components/Home';
import SecaoContratar from './components/SecaoContratar/SecaoContratar'
import Carrinho from './components/Carrinho'

const GlobalStyle = createGlobalStyle`
   *{
	margin: 0;
    padding: 0;
	box-sizing: border-box;

	button{
		&:hover{
			cursor: pointer;
		}
	}
   }
`


class App extends React.Component {
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
		carrinho: [
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
			}
		]
	}

	trocarDeTela = () => {
		switch(sessionStorage.getItem('tela')){
			
			case "queroSerUmNinja":
				return <SerUmNinja invocarTela={this.invocarTrocarDeTela}/>

			case "contratarUmNinja":
				return <SecaoContratar invocarTela={this.invocarTrocarDeTela}/>

			case "carrinho":
				return <Carrinho invocarTela={this.invocarTrocarDeTela}/>

			default:
				return <Home invocarTela={this.invocarTrocarDeTela}/>
		}
	}

	
	invocarTrocarDeTela = (id) =>{
		this.setState({tela: id})
		sessionStorage.setItem('tela',id)
		this.trocarDeTela()
	}

	render() {
		return (
			<div>
				<GlobalStyle/>
				<Header invocarTela={this.invocarTrocarDeTela}/>
				{this.trocarDeTela()}
			</div>
		)
	}
}

export default App