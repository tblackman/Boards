import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BoardsRouter from './BoardsRouter';

// The Main component renders one of the two provided
// Routes (provided that one matches). The /boards
// route will match any pathname that starts
// with /boards. The / route will only match
// when the pathname is exactly the string "/"

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path='/boards' component={BoardsRouter} />
        </Switch>
      </main>
    );
  }
}

export default Main;
