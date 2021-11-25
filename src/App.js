import React from 'react'
import { AppContainer } from './components/AppContainer'
import SerUmNinja from './components/SerUmNinja'
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Header from './components/Header'
import Home from './components/Home';

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

	render(){
		return(
			<div>
				<GlobalStyle/>
				{/* <Header/>
				<Home/> */}
			</div>
		)
	}
}

export default App