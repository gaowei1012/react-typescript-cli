import React, { Component } from 'react'
import ButtonWithDefaull from '../Button/Button'

type State = Readonly<typeof instanceState>
const instanceState = { value: 0 };

class InstanceButton extends Component<object, State> {
  // readonly 只读
  readonly state: State = instanceState;

  private handleInstanOnce = () => this.setState(addFunc)
  private handleInstanTwo = () => this.setState(decFun)

  render():JSX.Element {
    const {value} = this.state;
    return(
      <>
        <ButtonWithDefaull onClick={this.handleInstanOnce}>InstanceOne</ButtonWithDefaull>
        <ButtonWithDefaull onClick={this.handleInstanTwo}>InstanceTwo</ButtonWithDefaull>
        <p>you are {value}</p>
      </>
    )
  }
}

const addFunc = (prevState: State) => ({
  value: prevState.value + 1
})

const decFun = (prevState: State) => ({
  value: prevState.value - 1
})


export default InstanceButton;
