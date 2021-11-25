import React from 'react'
import SerUmNinja from './components/SerUmNinja'
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header'
import Home from './components/Home';
import { atualizarServicos, deletarServico, getServicoPorId, getServicos, postServicos } from './Servicos/Api'
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
		carrinho: {
			valoTotal: 0,
			produtos: [
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
				}]
		}
	}

	addCarrinho = (servico) => {
		let servicoSelecionado = [...this.state.carrinho.produtos, servico]
		this.setState({carrinho: servicoSelecionado})
		alert(`O serviço foi adicionado ao seu carrinho`)
	  }

	componentDidMount = () => {
		//this.carregarJobs()
		//this.atualizarJobs()
		//this.pegarJob()
		//this.deletarJobs()
		//this.criarJobs()
	}

	carregarJobs = () => {
		getServicos()
	}

	pegarJob = (id) => {
		getServicoPorId(id)
	}

	criarJobs = () => {
		let body = {
			"title": "Babá",
			"description": "Cuidar de crianças de 6 meses até 10 anos",
			"price": 500,
			"paymentMethods": ["PayPal", "boleto"],
			"dueDate": "2021-12-30"
		}

		postServicos(body)
	}

	atualizarJobs = (boleano, id) => {
		atualizarServicos(boleano, id)
	}

	deletarJobs = (id) => {
		deletarServico(id)
	}

	//TROCAR DE TELA -------------------------------------------------------------------------------------------------

	trocarDeTela = () => {
		switch (sessionStorage.getItem('tela')) {

			case "queroSerUmNinja":
				return <SerUmNinja invocarTela={this.invocarTrocarDeTela} />

			case "contratarUmNinja":
				return <SecaoContratar invocarTela={this.invocarTrocarDeTela} anuncios={this.state.anuncios}
				carrinho={this.state.carrinho} addCarrinho={this.addCarrinho}/>

			case "carrinho":
				return <Carrinho invocarTela={this.invocarTrocarDeTela} statusCarrinho={this.state.carrinho} atualizarCarrinho={this.atualizarCarrinho} carrinho={this.state.carrinho} />

			default:
				return <Home invocarTela={this.invocarTrocarDeTela} />
		}
	}


	invocarTrocarDeTela = (id) => {
		this.setState({ tela: id })
		sessionStorage.setItem('tela', id)
		this.trocarDeTela()
	}

	//ATUALIZAR CARRINHO-----------------------------------------------------------------------------------------------

	atualizarCarrinho = (valor) => {
		console.log(valor)
		this.setState({ carrinho: { valoTotal: 0, produtos: valor } })
	}

	//RENDER-----------------------------------------------------------------------------------------------------------

	render() {
		return (
			<div>
				<GlobalStyle />
				<Header invocarTela={this.invocarTrocarDeTela} />
				{this.trocarDeTela()}
			</div>
		)
	}
}

export default App