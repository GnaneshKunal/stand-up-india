import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main';
import HomePage from './HomePage';
import Header from './Header';
import DocView from './DocView';

const App = (): JSX.Element => (
    <div>
        <Header />
        <main>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/search' component={Main} />
                <Route exact path='/doc' component={DocView} />
            </Switch>
        </main>
    </div>
);

export default App;
