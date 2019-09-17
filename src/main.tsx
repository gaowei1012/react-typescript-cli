import * as React from 'react';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from './redux/store';
import { ExRouter } from './routes/router';

export interface IMainProps {
  app: App;
}

export class Main extends React.Component {
  public render(): JSX.Element {
    return (
      <Provider store={store}>
        <ExRouter />
      </Provider>
    );
  }
}
