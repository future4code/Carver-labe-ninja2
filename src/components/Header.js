import React from 'react'
import styled from 'styled-components'
import CarrinhoIcon from '../Util/Imagem/carrinho.svg'
import LogoIcon from '../Util/Imagem/logo2.svg'

const Pai = styled.header`
    background: black;
    height: 11vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 12px;
    color: white;



    h1{
        border: 2px solid white;
        padding: 5px;
        cursor: pointer;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        img{
            width: 8vw;
        }

        h1{
            font-size: 6vw;
        }
    }
    @media screen and (max-device-width : 800px){

        img{
            width: 7vw;
        }
    }
`
const Imagem=styled.img` 
    width: 3.5vw;
    margin-right: 1vw;
 `
 
const CarriIcon=styled.img`
  
    width: 2.5vw;
    margin-right: 1vw;
    cursor: pointer;
 `
const DivLogo=styled.div`
    display: flex;
 `

export default class Header extends React.Component {

    render() {

        return (
            <Pai>
             <DivLogo>
                <Imagem src={LogoIcon} alt="icone logo" />
                <h1 onClick={() => this.props.invocarTela("home")}>DeimeLimões</h1>
                </DivLogo>
                <div>
                
                    <CarriIcon src={CarrinhoIcon} onClick={() => this.props.invocarTela("carrinho")} alt="icone carrinho" />
                </div>
            </Pai>
        )
    }
}