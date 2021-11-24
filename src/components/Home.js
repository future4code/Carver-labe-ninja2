import React from "react";
import styled from "styled-components";

const Main = styled.div`
    height: 52vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const Pai = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40vw;
    height: 40vh;
    /* border: 1px solid black; */
`
const Buttons = styled.div`
    display: flex;
`
export default class Home extends React.Component {
    render() {
        return (
            <Main>
                <Pai>
                    <h1>LabeNinjas</h1>
                    <h3>O talento certo no momento certo</h3>
                    <Buttons>
                        <button onClick={this.props.trocarDeTelaSerUmNinja}>Quero ser um Ninja</button>
                        <button onClick={this.props.trocarDeTelaSecaoContratar}>Contratar um Ninja</button>
                    </Buttons>
                </Pai>
            </Main>
        )
    }
}