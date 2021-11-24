import React from 'react'
import styled from 'styled-components'

const Pai = styled.header`
    border: 1px solid black;
    background: grey;
    height: 11vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    padding: 0 12px 0 12px;
`
export default class Header extends React.Component {

    render() {

        return (
            <Pai>
                <h1>LabeNinjas</h1>
                <div>
                    <button onClick={() => this.props.invocarTela("home")}>Home</button>
                    <button onClick={() => this.props.invocarTela("carrinho")}>Carrinho</button>
                </div>
            </Pai>
        )
    }
}