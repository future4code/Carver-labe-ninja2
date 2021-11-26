import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 11vh;
    height: 89vh;
`

const Cadastro = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    width: 40%;
    height: 90%;
    padding-bottom: 0.5vw;
    background: linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);
    font-weight: bold;

    h2{
        font-size: 4vw;
    }

    li{
        list-style: none;
    }
    
`
const Slogan = styled.div`
    text-align: center;
    width: 80%;
    font-size: 2vw;
    color: grey;
`
class Sobrenos extends React.Component {

    render() {
        return (
            <Container>
                <Cadastro>
                    <h2>Sobre nós</h2>
                    <Slogan>
                        <p>Grupo de desenvolvedores FullStack determinados a transformar o mundo.</p>
                    </Slogan>
                    <h3>Equipe:</h3>
                    <ul>
                        <li>Anna Isabella Gomes Quaranta</li>
                        <li>Yanikisia Kathlyn Barbosa Cavalcante</li>
                        <li>Soraia Aparecida Chaves Cordeiro Lima</li>
                        <li>José Rodolfo Valério Costa</li>
                        <li>Madreyv Sebastião Silva Gomes</li>
                    </ul>

                    <p>Turma Carver</p>

                </Cadastro>
            </Container>

        )
    }
}
export default Sobrenos