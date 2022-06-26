import React from 'react'
import styled from 'styled-components'

const Pai = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    height: 11vh;
    width: 100%;
    padding: 0 12px;
    color: white;
    position: fixed;
    bottom: 0;

    img{
        width: 2.5vw;
        margin-right: 1vw;
        cursor: pointer;
    }


    p{
        cursor: pointer;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        position: relative;
        height: 6.5vh;
    }
    @media screen and (max-device-width : 800px){
        p{
            font-size: 5vw;
        }
    }
`
export default class Footer extends React.Component {

    render() {

        return (
            <Pai>
                <p onClick={() => this.props.invocarTela("sobrenos")}>Sobre nós</p>
            </Pai>
        )
    }
}