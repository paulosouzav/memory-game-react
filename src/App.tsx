import React, { Component } from 'react';
import { Game } from './views';
// import { Router } from '@reach/router';
// import { ROUTES as APP_ROUTES } from './constants';

class App extends Component {
  render() {
    return <Game />;
  }
}

export default App;

// type ViewProps = {
//   Component: any;
//   path: string;
// };

// const buildView = ({ Component, ...props }: ViewProps, key: number) => (
//   <Component {...{ ...props, key }} />
// );

// const Views = () => <Router>{APP_ROUTES.map(buildView)}</Router>;

// export default Views;
