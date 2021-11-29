import React from "react";
import styled from "styled-components";

const Main = styled.div`
    display: flex;
    justify-content: center;
    height: 89vh;
    background: url('https://images.unsplash.com/photo-1513754934927-4606bafe9858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80');

    @media screen and (max-device-width : 480px){
        background-size: cover;
        height: 83vh;
    }
    
    
`

const DivMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;

    h1{
        font-size: 7vw;
        padding: 1vw;
        text-decoration: underline;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        width: 95%;
        h1{
            font-size: 12vw;
        }
    }
`

const InteriorMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: rgba(0,0,0,0.3);
    border: 1px black solid;
    width: 45vw;
    height: 58vh;

    h2{
        font-size: 2vw;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        width: 100%;

        h2{
            font-size: 6vw;
            text-align: center;
        }
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 800px){
        h2{
            font-size: 2.5vw;
            text-align: center;
        }
    }
`

const Buttons = styled.div`
    display: flex;
    width: 90%;
    height: 3.5vw;
    
    button{
        margin: 0 auto;
        background-color: hsl(0deg 0% 0%);
        color: white;
        border: none;
        z-index: 1;
        position: relative;
        font-size: inherit;
        font-family: inherit;
        color: white;
        padding: 0.5em 1em;
        outline: none;
        border: none;
        overflow: hidden;
        


        &:after {
            content: "";
            z-index: -1;
            background-color: hsla(0, 0%, 100%, 0.2);
            position: absolute;
            top: -50%;
            bottom: -50%;
            width: 2.0em;
            transform: translate3d(-525%, 0, 0) rotate(35deg);
        }

        &:hover:after {
            transition: transform 0.60s ease-in-out;
            transform: translate3d(200%, 0, 0) rotate(35deg);
        }

    }
    @media screen and (min-device-width : 320px) and (max-device-width : 480px){
        height: 40.5vw;
        flex-direction: column;
        justify-content: space-around;

        button{
            width: 100%;
            font-size: 5vw;
        }
    }

    @media screen and (min-device-width : 481px) and (max-device-width : 800px) {
        button{
            padding: 2%;
        }
    }

`

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Main>
                    {/* <Imagem /> */}
                    <DivMain>
                        <InteriorMain>
                            <h1>DeimeLimões</h1>
                            <h2>Se a vida te der limões, faça limonada.</h2>
                            <Buttons>
                                <button onClick={() => this.props.invocarTela("queroSerUmNinja")}>Quero ser um limão</button>
                                <button onClick={() => this.props.invocarTela("contratarUmNinja")}>Fazer Limonada</button>
                            </Buttons>
                        </InteriorMain>

                    </DivMain>

                </Main>
            </div>
        )
    }
}