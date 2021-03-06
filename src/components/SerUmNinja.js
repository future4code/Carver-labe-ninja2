import React from "react";
import styled from "styled-components";
import { getServicos, postServicos } from "../Servicos/Api";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  border: 1px blue solid;
  min-height: 100vh;

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    min-height: 100%;
  }
`;

const Cadastro = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  width: 40%;
  height: 80%;
  margin-top: 5%;
  padding-bottom: 0.5vw;
  background: linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);

  h2 {
    font-size: 3vw;
  }

  input,
  select {
    width: 70%;
    margin-bottom: 12px;
    border: none;
  }

  input {
    padding: 0.5vw;
    height: 2vw;
  }

  select {
    padding: 0.2vw;
    height: 6.5vw;
    overflow: auto;
  }

  label{
    margin-bottom: 1%;
    margin-left: -49%;
  }

  button {
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
      width: 2em;
      transform: translate3d(-525%, 0, 0) rotate(35deg);
    }

    &:hover:after {
      transition: transform 0.6s ease-in-out;
      transform: translate3d(200%, 0, 0) rotate(35deg);
    }

    fieldset input {
      width: 600px;
    }
  }

  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    width: 100%;
    height: 83vh;
    justify-content: space-evenly;
    margin: 0;

    h2 {
      font-size: 8vw;
    }

    input,
    select {
      width: 85%;
      font-size: 5vw;
      background-color: white;
    }

    input {
      height: 9vw;
      padding: 2%;
    }

    select {
      padding: 2%;
      height: 33vw;
    }

    label{
        margin-bottom: -7%;
        margin-left: -55%;
    }

    button {
      width: 50%;
      font-size: 5vw;
    }
  }

  @media screen and (min-device-width : 481px) and (max-device-width : 800px){
      width: 60%;
      height: 70vh;
      margin: 2%;
      padding: 1%;

      input{
          height: 4vw;
      }

      select{
          height: 10.5vw;
      }

      label{
          margin-left: -46%;
      }
  }
`;
class SerUmNinja extends React.Component {
  state = {
    inputTitulo: "",
    inputDescricao: "",
    inputPreco: "",
    inputPagamento: [],
    inputData: "",
  };

  // Fun????es para salvar o input:
  salvarTitulo = (e) => {
    this.setState({ inputTitulo: e.target.value });
  };

  salvarDescricao = (e) => {
    this.setState({ inputDescricao: e.target.value });
  };

  salvarPreco = (e) => {
    this.setState({ inputPreco: e.target.value });
  };

  salvarPagamento = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    this.setState({ inputPagamento: value });
  };

  salvarData = (e) => {
    this.setState({ inputData: e.target.value });
  };

  // Constr??i a data atual para utilizar no input date
  dataLimite = () => {
    const dataAtual = new Date();
    const dia = dataAtual.getDate();
    const mes = dataAtual.getMonth() + 1;
    const ano = dataAtual.getFullYear();
    return `${ano}-${mes}-${dia}`;
  };

  // Evita que o usu??rio selecione uma data inferior a atual
  compararData = () => {
    const partesData = this.state.inputData.split("-");
    const dataInserida = new Date(
      Number(partesData[0]),
      Number(partesData[1] - 1),
      Number(partesData[2]),
      23,
      59,
      59
    );
    const dataAtual = new Date();
    if (dataInserida.getTime() < dataAtual.getTime()) {
      return false;
    } else if (dataInserida.getTime() > dataAtual.getTime()) {
      return true;
    } else {
      return true;
    }
  };

  cadastrarServico = () => {
    if (
      this.state.inputTitulo.length < 1 ||
      this.state.inputDescricao.length < 1
    ) {
      alert(`Insira um nome e uma descri????o.`);
    }
    if (this.state.inputPreco <= 0) {
      alert(`Insira um pre??o acima de R$ 0.`);
    } else if (this.state.inputPagamento.length === 0) {
      alert(`Escolhe ao menos uma forma de pagamento.`);
    } else if (!this.compararData()) {
      alert(
        `A data limite para a realiza????o do servi??o deve ser maior do que a data atual.`
      );
    } else {
      const novoServico = {
        title: this.state.inputTitulo,
        description: this.state.inputDescricao,
        price: Number(this.state.inputPreco),
        paymentMethods: this.state.inputPagamento,
        dueDate: this.state.inputData,
      };

      // Chamar a requisi????o POST: Create Job
      postServicos(novoServico);
      getServicos();

      alert(`Servi??o cadastrado com sucesso!`);
      this.setState({
        inputTitulo: "",
        inputDescricao: "",
        inputPreco: "",
        inputPagamento: [],
        inputData: "",
      });
    }
  };

  render() {
    return (
      <Container>
        <Cadastro>
          <h2>Cadastre o seu servi??o</h2>
          <input
            placeholder="T??tulo do servi??o"
            value={this.state.inputTitulo}
            onChange={this.salvarTitulo}
          />
          <input
            placeholder="Descri????o do servi??o"
            value={this.state.inputDescricao}
            onChange={this.salvarDescricao}
          />
          <input
            placeholder="Pre??o"
            value={this.state.inputPreco}
            onChange={this.salvarPreco}
            type="number"
          />
          <select multiple onChange={this.salvarPagamento}>
            <option>Boleto</option>
            <option>Cart??o de cr??dito</option>
            <option>Cart??o de d??bito</option>
            <option>Pix</option>
            <option>PayPal</option>
          </select>
          <label>Prazo de servi??o:</label>
          <input
            value={this.state.inputData}
            onChange={this.salvarData}
            min={this.dataLimite()}
            type="date"
          />

          <button onClick={this.cadastrarServico}>Cadastrar Servi??o</button>
        </Cadastro>
      </Container>
    );
  }
}
export default SerUmNinja;
