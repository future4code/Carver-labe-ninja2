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
			case "home":
				return <Home trocarDeTelaSerUmNinja={this.trocarDeTelaSerUmNinja} trocarDeTelaSecaoContratar={this.trocarDeTelaSecaoContratar}/>

			case "queroSerUmNinja":
				return <SerUmNinja/>

			case "contratarUmNinja":
				return <SecaoContratar/>

			case "carrinho":
				return <Carrinho/>

			default:
				return <Home/>
		}
	}

	trocarDeTelaHome = () =>{
        this.setState({tela: "home"})
		sessionStorage.setItem('tela','home')
        this.trocarDeTela()
    }
    trocarDeTelaCarrinho = () =>{
        this.setState({tela: "carrinho"})
		sessionStorage.setItem('tela','carrinho')
        this.trocarDeTela()
    }
	trocarDeTelaSerUmNinja = () =>{
        this.setState({tela: "queroSerUmNinja"})
		sessionStorage.setItem('tela','queroSerUmNinja')
        this.trocarDeTela()
    }
    trocarDeTelaSecaoContratar = () =>{
        this.setState({tela: "contratarUmNinja"})
		sessionStorage.setItem('tela','contratarUmNinja')
        this.trocarDeTela()
    }


	render() {
		return (
			<div>
				<GlobalStyle/>
				<Header trocarDeTelaHome={this.trocarDeTelaHome} trocarDeTelaCarrinho={this.trocarDeTelaCarrinho}/>
				{this.trocarDeTela()}
			</div>
		)
	}
}

export default App