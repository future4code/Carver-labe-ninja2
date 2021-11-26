import React from 'react'
import styled from 'styled-components'
import CarrinhoIcon from '../Util/Imagem/carrinho.svg'

const Pai = styled.header`
    border: 1px solid black;
    background: black;
    height: 11vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    color: white;

    img{
        width: 2.5vw;
        margin-right: 1vw;
        cursor: pointer;

        
    }

    h1{
        border: 2px solid white;
        padding: 5px;
        cursor: pointer;
    }

    span{
        width: 50px;
        height: 50px
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        img{
            width: 8vw;
        }

        h1{
            font-size: 6vw;
        }
    }
`
export default class Header extends React.Component {

    render() {

        return (
            <Pai>
                <h1 onClick={() => this.props.invocarTela("home")}>LabeNinjas</h1>
                <div>
                    <img src={CarrinhoIcon} onClick={() => this.props.invocarTela("carrinho")} alt="icone carrinho"/>
                </div>
            </Pai>
        )
    }
}