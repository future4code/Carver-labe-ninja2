import React from 'react'
import styled from "styled-components";

const Cadastro = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;

    input{
        width:300px;
        margin-bottom:12px;
    }

    select{
    width: 308px;
    margin-bottom: 12px;
    }
    button{
    cursor: pointer;
    }
`

class SerUmNinja extends React.Component{
    render(){
        return(
            <Cadastro>
          <h1>Cadastre o seu serviço</h1>
          <input
          placeholder="Título"
          // value={}
          // onChange={}
          />
          <input 
           placeholder="Descrição"
          //  value={}
          //  onChange={}
           />
          <input
           placeholder="Preço"
          //  value={}
          //  onChange={}
           type="number"
           />
           <select multiple>
             <option>Boleto</option>
             <option>Cartão de crédito</option>
             <option>Cartão de débito</option>
             <option>Pix</option>
             <option>Playpal</option>
           </select>
           <input
           placeholder="Prazo de serviço"
          //  value={}
          //  onChange={}
           type="date"/>
           <button >Cadastrar Serviço</button>
        
            </Cadastro>
        )
    }
}
export default SerUmNinja