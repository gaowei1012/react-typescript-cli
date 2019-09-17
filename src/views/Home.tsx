import * as React from 'react';
import { Component } from 'react';
// import { Button } from 'antd';
import { connect } from 'react-redux';
// import InstanceButton from '../components/Instance/Instance';
// import Icon from '../components/Icon/Icon'
import { ButtonWithDefaultProps } from '../components/Button/Button';

const initState = {
  count: 0
};

type State = Readonly<typeof initState>;

class Home extends Component<State> {
  public handleChick = () => {
    console.log('test');
  };

  public render(): JSX.Element {
    return (
      <>
        {/* <Icon/> */}
        {/* <InstanceButton/> */}
        {/* <Button onClick={this.handleChick} type="default">HELLO</Button> */}
        <p>this is home views</p>
        <ButtonWithDefaultProps onClick={this.handleChick}>{'hello'}</ButtonWithDefaultProps>
      </>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
