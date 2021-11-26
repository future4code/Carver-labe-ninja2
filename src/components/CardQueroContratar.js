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
    margin: 1vw;

    h3 {
        font-size: 1.2rem;
    }

    img{
        width: 2.3vw;
        cursor: pointer;

        &:hover{
            fill: black;
        }
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        width: 90%;
        height: 25vh;
        margin-bottom: 10%;

        h3{
            font-size: 10vw;
        }

        img{
            width: 15vw;
        }

        p{
            font-size: 6vw;
        }

        strong{
            margin-left: 12%;
            font-size: 7vw;
        }

        button{
            font-size: 5vw;
            background-color: white;
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
        const novaData = `${partesData[2].slice(0, 2)}/${partesData[1]}/${partesData[0]}`
        return novaData;
    }

    render() {
        return (
            <ContainerCard key={this.props.servico.id}>
                <h3>{this.props.servico.title}</h3>
                <p>{this.organizarData()} <strong>R$ {this.props.servico.price}</strong></p>
                <ContainerBotoes>
                    <button onClick={() => this.props.invocarTela("detalhes", this.props.servico)}>Ver detalhes</button>
                    <img src={CarrinhoIcon} onClick={() => this.props.addCarrinho(this.props.servico.id)} alt="icone carrinho" />
                </ContainerBotoes>
            </ContainerCard>
        )
    }
}

export default CardQueroContratar;