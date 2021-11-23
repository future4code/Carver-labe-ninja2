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
    render() {
        return (
            <ContainerDetalhes>
                <ContainerInfoServico>
                    <ContainerTitulo>
                        <h3>Título do serviço</h3>
                        <p>Lavo todas as louças em menos de 5min.</p>
                    </ContainerTitulo>
                    <p>Aceita: Cartão de crédito, Pix</p>
                    <p>Até 04/12/1991 por <strong>R$ 99.00</strong></p>

                    <ContainerBotoes>
                        <button>Adicionar ao carrinho</button>
                        <button>Voltar para a lista</button>
                    </ContainerBotoes>
                </ContainerInfoServico>
            </ContainerDetalhes>
        )
    }
}

export default DetalhesServicos;