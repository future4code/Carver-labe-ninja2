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

    organizarData = () => {
        const partesData = this.props.servico.dueDate.split("-")
        // console.log(partesData)
        const novaData = `${partesData[2].slice(0,2)}/${partesData[1]}/${partesData[0]}`
        return novaData;
    }

    render() {
        return (
            <ContainerCard key={this.props.servico.id}>
                <h3>{this.props.servico.title}</h3>
                <p>{this.organizarData()} <strong>R$ {this.props.servico.price}</strong></p>
                <ContainerBotoes>
                    <button onClick={() => this.props.invocarTela("detalhes",this.props.servico)}>Ver detalhes</button>
                    <button 
                    onClick= {()=>this.props.addCarrinho(this.props.servico.id)}
                    >Adicionar no carrinho</button>
                </ContainerBotoes>
                {this.props.servico.taken && <p>Taken ativo</p>}
            </ContainerCard>
        )
    }
}

export default CardQueroContratar;