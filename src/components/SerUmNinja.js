import React from 'react'
import styled from "styled-components";
import DetalhesServicos from './DetalhesServicos';

const Cadastro = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        width:300px;
        margin-bottom:12px;
    }

    select{
    width: 308px;
    margin-bottom: 12px;
    }
    button{
    cursor: pointer;
    }
`

const ContainerBotoes = styled.div`
    margin-top: 4vh;
    display: flex;
    justify-content: column;
    flex-direction: column;

    button {
        margin: 1vh;
        cursor: pointer;
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
            "price": this.state.inputPreco,
            "paymentMethods": this.state.inputPagamento,
            "dueDate": this.state.inputData,
            "taken": false
        }
        // Chamar a requisição POST: Create Job

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
            <Cadastro>
                <h1>Cadastre o seu serviço</h1>
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
                <ContainerBotoes>
                    <button onClick={this.cadastrarServico}>Cadastrar Serviço</button>
                    <button onClick={this.cadastrarServico}>Voltar para Home</button>
                </ContainerBotoes>
                <DetalhesServicos />
            </Cadastro>
        )
    }
}
export default SerUmNinja