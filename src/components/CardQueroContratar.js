import React from "react";
import styled from "styled-components"

const ContainerCard = styled.div`
    border: 1px solid black;
    background-color: #d3d3d3;
    width: 20vw;
    height: 20vh;
    padding: 0 1vw 1vw;
    text-align: center;

    h3 {
        font-size: 1.2rem;
    }
`

const ContainerBotoes = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        cursor: pointer;
    }
`

class CardQueroContratar extends React.Component {
    render() {
        // let convertData = new Date(this.props.servico.dueDate)
        //     convertData = convertData.toLocaleDateString('pt-BR', {timeZone: "UTC"})
        // console.log("servicos", this.props.servico)
        console.log(this.props.servico)
        return (
            <ContainerCard key={this.props.servico.id}>
                <h3>{this.props.servico.title}</h3>
                <p>{this.props.servico.dueDate} <strong>R$ {this.props.servico.price}</strong></p>
                <ContainerBotoes>
                    <button onClick={() => this.props.invocarTela("detalhes",this.props.servico)}>Ver detalhes</button>
                    <button 
                    onClick= {()=>this.props.addCarrinho(this.props.servico.id)}
                    >Adicionar no carrinho</button>
                </ContainerBotoes>
            </ContainerCard>
        )
    }
}

export default CardQueroContratar;