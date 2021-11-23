import React from 'react'
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Header from './components/Header'
import Home from './components/Home';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
	box-sizing: border-box;
  }

  p {
    margin: 0;
  }
`

class App extends React.Component{
	render(){
		return(
			<div>
				<GlobalStyle/>
			</div>
		)
	}
}

export default App
