import React, {Component, ReactNode} from 'react'

const initState = {value: 0}
type State = Readonly<typeof initState>
type Props<P extends object = object> = Partial<{
  icon: ReactNode
} & null>
export default class ExIcon extends Component<object, State> {
  readonly state: State = initState;

  public handleClick =() => this.setState(handleStateClick)

  render():JSX.Element {
    const {value} = this.state
    return (
      <div>
        <button onClick={this.handleClick}>Add</button>
        <p>{value}</p>
      </div>
    )
  }
}


const handleStateClick = (prevState: State) => ({
  value: prevState.value + 1
})