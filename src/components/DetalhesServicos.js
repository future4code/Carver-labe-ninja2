import React from "react";
import styled from "styled-components";

const ContainerDetalhes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70vh;
`

const ContainerInfoServico = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 30vw;
    height: 40vh;

    p {
    margin: 0.7vh;
    text-align: center;
    word-wrap: break-word;
}
`

const ContainerTitulo = styled.div`
    text-align: center;
    margin-bottom: 4vh;
    
    h3 {
        margin: 0.4vh;
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

class DetalhesServicos extends React.Component {

    // Adicionar requisição de Get Job By ID utilizando o id do serviço recebido via props.

    // Exemplo de resposta da requisição:
    detalhesServicos = {
            title:"Cortar a grama",
            description:"Manutenção em áreas verdes de até 1000 metros quadrados.",
            price:40,
            paymentMethods:["PayPal", "boleto"],
            dueDate:"2021-12-30"
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
                        <p>{this.props.servico.description}</p>
                    </ContainerTitulo>
                    <p>Aceita: {this.props.servico.paymentMethods.join([', '])}.</p>
                    <p>Até {this.organizarData()} por <strong>R$ {this.props.servico.price}</strong>.</p>

                    <ContainerBotoes>
                        <button onClick={()=>this.props.addCarrinho(this.props.servico)}>Adicionar ao carrinho</button>
                        <button onClick={()=>this.props.invocarTela("contratarUmNinja")}>Voltar para a lista</button>
                    </ContainerBotoes>
                </ContainerInfoServico>
            </ContainerDetalhes>
        )
    }
}

export default DetalhesServicos;