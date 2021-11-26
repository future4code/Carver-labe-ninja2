import React from 'react'
import SerUmNinja from './components/SerUmNinja'
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header'
import Home from './components/Home';
import { atualizarServicos, deletarServico, getServicoPorId, getServicos, postServicos } from './Servicos/Api'
import SecaoContratar from './components/SecaoContratar/SecaoContratar'
import Carrinho from './components/Carrinho'
import DetalhesServicos from './components/DetalhesServicos';
import Sobrenos from './components/Sobrenos';
import Footer from './components/Footer';

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
		anuncios: [],
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
				}
			]
		},
		servisoSelecionado: []
	}

	componentDidMount = () => {
		this.carregarJobs()
		this.buscarLocalStorage()
	}
	componentDidUpdate = () => {
		this.carregarJobs()
		this.salvarLocalStorage();
	}
	salvarLocalStorage = () => {
		localStorage.setItem("carrinho", JSON.stringify(this.state.carrinho))
	}
	buscarLocalStorage = () => {
		const carrinhoLocalStorage = localStorage.getItem("carrinho")
		const carrinhoParse = JSON.parse(carrinhoLocalStorage)
		this.setState({
			carrinho: carrinhoParse || { valorTotal: 0, produtos: [] }
		})
	}

	addCarrinho = (servico) => {
		let verificaExistencia;
		for (let i = 0; i < this.state.carrinho.produtos.length; i++) {
			if (this.state.carrinho.produtos[i].id === servico.id) {
				verificaExistencia = true;
			}
		}
		if (verificaExistencia) { alert("Esse produto já está no carrinho.") }
		else {
			let soma = servico.price
			this.state.carrinho.produtos.map((valor) => {
				soma = valor.price + soma
				return soma
			})
			// sugestão de melhoria: usar reduce no lugar do map

			let novoServico = {
				valorTotal: soma,
				produtos: [...this.state.carrinho.produtos, servico]
			}

			// let servicoSelecionado = [...this.state.carrinho, novoServico]


			this.setState({ carrinho: novoServico })
			alert(`O serviço foi adicionado ao seu carrinho`)
			this.atualizarJobs(true, servico.id)
			this.carregarJobs()
		}

	}

	carregarJobs = () => {
		let servicos = getServicos()
		servicos.then((res) => {
			this.setState({
				anuncios: res
			})
			return servicos

		})
	}

	pegarJob = (id) => {
		getServicoPorId(id)
	}

	criarJobs = (body) => {

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
					carrinho={this.state.carrinho} addCarrinho={this.addCarrinho} />

			case "carrinho":
				return <Carrinho invocarTela={this.invocarTrocarDeTela} statusCarrinho={this.state.carrinho} atualizarCarrinho={this.atualizarCarrinho} carrinho={this.state.carrinho} atualizarJobs={this.atualizarJobs} />
			case "detalhes":
				return <DetalhesServicos servico={this.state.servisoSelecionado} addCarrinho={this.addCarrinho} invocarTela={this.invocarTrocarDeTela} />
			case "sobrenos":
				return <Sobrenos />
			default:
				return <Home invocarTela={this.invocarTrocarDeTela} />
		}
	}


	invocarTrocarDeTela = (id, servico) => {

		this.setState({ tela: id, servisoSelecionado: servico })
		sessionStorage.setItem('tela', id)
		this.trocarDeTela()
	}

	//ATUALIZAR CARRINHO-----------------------------------------------------------------------------------------------

	atualizarCarrinho = (valor) => {

		this.setState({ carrinho: { valoTotal: 0, produtos: valor } })
	}

	//RENDER-----------------------------------------------------------------------------------------------------------

	render() {

		return (
			<div>
				<GlobalStyle />
				<Header invocarTela={this.invocarTrocarDeTela} />
				{this.trocarDeTela()}
				<Footer invocarTela={this.invocarTrocarDeTela} />
			</div>
		)
	}
}

export default App