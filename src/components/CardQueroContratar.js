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
        return (
            <ContainerCard>
                <h3>Título do Serviço</h3>
                <p>Até 04/12/1991 por <strong>R$ 99.00</strong></p>
                <ContainerBotoes>
                    <button>Ver detalhes</button>
                    <button>Adicionar no carrinho</button>
                </ContainerBotoes>
            </ContainerCard>
        )
    }
}

export default CardQueroContratar;