import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BoardDisplayer from './BoardDisplayer';
import boardsId from './index.js';
import ProductRow from './index.js';

// The Board component matches one of two different routes
// depending on the full pathname
// either it will display the boards index for /boards
// or the BoardDisplayer component for /boards/:boardParamId

// Keep note of the matcher `:boardParamId` this will be used
// by our BoardDisplayer component.


class BoardsRouter extends React.Component {
  render() {
    return(
      <Switch>
        <Route exact path='/boards' component={boardsId} />
        <Route path='/boards/:boardParamId' component={BoardDisplayer} />
      </Switch>
    );
  }
}

export default BoardsRouter;
