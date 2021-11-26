import styled from "styled-components";
import React from "react"
import PulseLoader from "react-spinners/PulseLoader";

const CarregarEstilizado = styled.div`  
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 13%;
`

export default class Carregar extends React.Component {
    state = {
        loading: true
    }

    render() {
        return (
            <CarregarEstilizado>

                <PulseLoader
                    loading={this.state.loading}
                    color="#FFAB0F"
                    size={50}
                    speedMultiplier={2}
                />
            </CarregarEstilizado>)
    }
}
