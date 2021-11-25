import React from 'react'
import SerUmNinja from './components/SerUmNinja'
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Header from './components/Header'
import Home from './components/Home';
import CardQueroContratar from './components/CardQueroContratar';
import SecaoContratar from './components/SecaoContratar/SecaoContratar';

const GlobalStyle = createGlobalStyle`
   *{
	margin: 0;
    padding: 0;
	box-sizing: border-box;
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
				dueDate: "2021-12-30",
				taken: false
			},
			{
				id: "a",
				title: "Oiii",
				description: "ççççç.",
				price: 4000,
				paymentMethods: [
					"PayPal",
					"boleto"
				],
				dueDate: "2221-12-30",
				taken: false
			},
			{
				id: "e",
				title: "hoje",
				description: "uuuuu.",
				price: 5,
				paymentMethods: [
					"PayPal",
					"boleto"
				],
				dueDate: "2050-12-30",
				taken: false
			},
			{
				id: "kk",
				title: "Testettsvsg",
				description: "jjjj.",
				price: 500,
				paymentMethods: [
					"PayPal",
					"boleto"
				],
				dueDate: "2090-12-30",
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

		addCarrinho = (servico) => {
		let servicoSelecionado = [...this.state.carrinho, servico]
		this.setState({carrinho: servicoSelecionado})
		alert(`O serviço foi adicionado ao seu carrinho`)
	  }


	render() {
		return (

			<div>
				<GlobalStyle />
				{/* <Header/>
				<Home/> */}
				<SecaoContratar
					anuncios={this.state.anuncios}
					carrinho={this.state.carrinho}
					addCarrinho={this.addCarrinho}
				/>


			</div>
		)
	}
}

export default App