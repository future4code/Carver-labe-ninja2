import React from "react";
import styled from "styled-components"
import CarrinhoIcon from '../Util/Imagem/carrinho.svg'

const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 0.3vw;
    color: black;
    background: linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);
    width: 20vw;
    height: 20vh;
    padding: 0 1vw 1vw;
    text-align: center;
    box-shadow: black 0px 3px 5px;

    h3 {
        font-size: 1.2rem;
    }

    img{
        width: 2.3vw;

        &:hover{
            fill: black;
        }
    }
`

const ContainerBotoes = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    button {
        width: 50%;
        padding: 0.5vw;
        border: none;
        
        &:hover{
            background-color: black;
            color: white;
            font-weight: bold;
        }
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
                    {/* <button 
                    onClick= {()=>this.props.addCarrinho(this.props.servico.id)}
                    >Adicionar no carrinho</button> */}
                    <img src={CarrinhoIcon} onClick= {()=>this.props.addCarrinho(this.props.servico.id)}  alt="icone carrinho"/>
                </ContainerBotoes>
            </ContainerCard>
        )
    }
}

export default CardQueroContratar;