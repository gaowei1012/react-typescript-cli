/** @format */

import * as React from 'react'
import {Component} from 'react'
import {connect} from 'react-redux'
import {ButtonWithDefaultProps} from '../components/Button/Button'

const initState = {
    count: 0,
}

type State = Readonly<typeof initState>

class Home extends Component<State> {
    public handleChick = () => {
        console.log('test')
    }

    public render(): JSX.Element {
        return (
            <>
                <p>this is home views</p>
                <ButtonWithDefaultProps onClick={this.handleChick}>{'hello'}</ButtonWithDefaultProps>
            </>
        )
    }
}

const mapStateToProps = (state: State) => {
    return {
        count: state.count,
    }
}

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home)
