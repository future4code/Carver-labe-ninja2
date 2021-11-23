import React, { Component } from 'react'
import styled from 'styled-components'
import SecaoContratar from './SecaoContratar/SecaoContratar'


export class AppContainer extends Component {
  render() {
    return (
      <div>
        <p>Pronto para começar!</p>
        <SecaoContratar/>
      </div>
    )
  }
}
