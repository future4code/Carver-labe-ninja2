import React from 'react'
import styled from 'styled-components'
import CarrinhoIcon from '../Util/Imagem/carrinho.svg'

const Pai = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: black;
    height: 11vh;
    padding: 0 12px;
    color: white;

    img{
        width: 2.5vw;
        margin-right: 1vw;
        cursor: pointer;
    }


    p{
        cursor: pointer;
    }
`
export default class Footer extends React.Component {

    render() {

        return (
            <Pai>
                <p onClick={() => this.props.invocarTela("sobrenos")}>Sobre nós</p>
                <img src={CarrinhoIcon} onClick={() => this.props.invocarTela("carrinho")} alt="icone carrinho" />
            </Pai>
        )
    }
}