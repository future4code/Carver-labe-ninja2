import React from 'react'
import styled from "styled-components";
import DetalhesServicos from './DetalhesServicos';
import { getServicos, postServicos } from '../Servicos/Api'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px blue solid;
    height: 89vh;
`

const Cadastro = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    width: 40%;
    height: 80%;
    padding-bottom: 0.5vw;
    background: linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);

    h2{
        font-size: 3vw;
    }

    input,select{
        width: 70%;
        margin-bottom:12px;
        border: none;
    }

    input{
        padding: 0.5vw;
        height: 2vw;
    }

    select{
        padding: 0.2vw;
        height: 6.5vw;
        overflow: auto;
    }

    button{
        margin: 0 auto;
        background-color: hsl(0deg 0% 0%);
        color: white;
        border: none;
        z-index: 1;
        position: relative;
        font-size: inherit;
        font-family: inherit;
        color: white;
        padding: 0.5em 1em;
        outline: none;
        border: none;
        overflow: hidden;
        cursor: pointer;

        &:after {
            content: "";
            z-index: -1;
            background-color: hsla(0, 0%, 100%, 0.2);
            position: absolute;
            top: -50%;
            bottom: -50%;
            width: 2.0em;
            transform: translate3d(-525%, 0, 0) rotate(35deg);
        }

        &:hover:after {
            transition: transform 0.60s ease-in-out;
            transform: translate3d(200%, 0, 0) rotate(35deg);
        }
    }
`

class SerUmNinja extends React.Component {
    state = {
        inputTitulo: "",
        inputDescricao: "",
        inputPreco: "",
        inputPagamento: [],
        inputData: "",
    }

    // Funções para salvar o input:
    salvarTitulo = (e) => {
        this.setState({ inputTitulo: e.target.value })
    }

    salvarDescricao = (e) => {
        this.setState({ inputDescricao: e.target.value })
    }

    salvarPreco = (e) => {
        this.setState({ inputPreco: e.target.value })
    }

    salvarPagamento = (e) => {
        let value = Array.from(e.target.selectedOptions, option => option.value);
        this.setState({ inputPagamento: value });
    }

    salvarData = (e) => {
        this.setState({ inputData: e.target.value })
    }

    // Constrói a data atual para utilizar no input date
    dataLimite = () => {
        const dataAtual = new Date();
        const dia = dataAtual.getDate();
        const mes = (dataAtual.getMonth() + 1);
        const ano = dataAtual.getFullYear();
        return `${ano}-${mes}-${dia}`
    }

    // Evita que o usuário selecione uma data inferior a atual
    compararData = () => {
        const partesData = this.state.inputData.split("-")
        const dataInserida = new Date(Number(partesData[0]), Number(partesData[1] - 1), Number(partesData[2]), 23, 59, 59);
        const dataAtual = new Date();
        if (dataInserida.getTime() < dataAtual.getTime()) {
            return false
        }
        else if (dataInserida.getTime() > dataAtual.getTime()) {
            return true
        } else {
            return true
        }
    }

    cadastrarServico = () => {
        if (this.state.inputTitulo.length < 1 || this.state.inputDescricao.length < 1) { alert(`Insira um nome e uma descrição.`) }
        if (this.state.inputPreco <= 0) { alert(`Insira um preço acima de R$ 0.`) }
        else if (this.state.inputPagamento.length === 0) { alert(`Escolhe ao menos uma forma de pagamento.`) }
        else if (!this.compararData()) { alert(`A data limite para a realização do serviço deve ser maior do que a data atual.`) }
        else {
            const novoServico = {
                "title": this.state.inputTitulo,
                "description": this.state.inputDescricao,
                "price": Number(this.state.inputPreco),
                "paymentMethods": this.state.inputPagamento,
                "dueDate": this.state.inputData,
            }
            console.log("novo", novoServico)

            // Chamar a requisição POST: Create Job
            postServicos(novoServico)
            getServicos()

            alert(`Serviço cadastrado com sucesso!`)
            this.setState({
                inputTitulo: "",
                inputDescricao: "",
                inputPreco: "",
                inputPagamento: [],
                inputData: "",
            })
        }
    }

    render() {
        return (
            <Container>
                <Cadastro>
                    <h2>Cadastre o seu serviço</h2>
                    <input
                        placeholder="Título do serviço"
                        value={this.state.inputTitulo}
                        onChange={this.salvarTitulo}

                    />
                    <input
                        placeholder="Descrição do serviço"
                        value={this.state.inputDescricao}
                        onChange={this.salvarDescricao}
                    />
                    <input
                        placeholder="Preço"
                        value={this.state.inputPreco}
                        onChange={this.salvarPreco}
                        type="number"
                    />
                    <select multiple onChange={this.salvarPagamento}>
                        <option>Boleto</option>
                        <option>Cartão de crédito</option>
                        <option>Cartão de débito</option>
                        <option>Pix</option>
                        <option>PayPal</option>
                    </select>
                    <input
                        placeholder="Prazo de serviço"
                        value={this.state.inputData}
                        onChange={this.salvarData}
                        min={this.dataLimite()}
                        type="date" />
                    <button onClick={this.cadastrarServico}>Cadastrar Serviço</button>
                </Cadastro>
            </Container>

        )
    }
}
export default SerUmNinja