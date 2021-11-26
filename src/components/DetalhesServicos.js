import React from "react";
import styled from "styled-components";

const ContainerDetalhes = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 89vh;
    padding-bottom: 11vh;
`

const ContainerInfoServico = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    width: 40%;
    height: 80%;
    padding: 1vw;
    background: linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);
    font-weight: bold;
    
    p {
    margin: 0.7vh;
    text-align: center;
    word-wrap: break-word;
}
`

const ContainerTitulo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 95%;
    height: 20%;
    margin: 10px;

    h3 {
        font-size: 4vh;
        margin-bottom: 2vh;
    }
`

const Descricao = styled.div`
    font-size: 1.1vw;
    width: 80%;
`

const ContainerBotoes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 30%;
    margin-top: 3vh;
    

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
        height: 3vw;

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

class DetalhesServicos extends React.Component {

    // Adicionar requisição de Get Job By ID utilizando o id do serviço recebido via props.

    // Exemplo de resposta da requisição:
    detalhesServicos = {
        title: "Cortar a grama",
        description: "Manutenção em áreas verdes de até 1000 metros quadrados.",
        price: 40,
        paymentMethods: ["PayPal", "boleto"],
        dueDate: "2021-12-30"
    }

    organizarData = () => {
        const partesData = this.detalhesServicos.dueDate.split("-")
        const novaData = `${partesData[2]}/${partesData[1]}/${partesData[0]}`
        return novaData;
    }

    render() {
        return (
            <ContainerDetalhes>
                <ContainerInfoServico>
                    <ContainerTitulo>
                        <h3>{this.props.servico.title}</h3>
                        <Descricao>
                            <p>{this.props.servico.description}</p>
                        </Descricao>
                    </ContainerTitulo>
                    <p>Aceita: {this.props.servico.paymentMethods.join([', '])}.</p>
                    <p>Até {this.organizarData()} por <strong>R$ {this.props.servico.price}</strong>.</p>

                    <ContainerBotoes>
                        <button onClick={() => this.props.addCarrinho(this.props.servico)}>Adicionar ao carrinho</button>
                        <button onClick={() => this.props.invocarTela("contratarUmNinja")}>Voltar para a lista</button>
                    </ContainerBotoes>
                </ContainerInfoServico>
            </ContainerDetalhes>
        )
    }
}

export default DetalhesServicos;