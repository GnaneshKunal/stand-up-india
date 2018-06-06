import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './Main';
import HomePage from './HomePage';
import Header from './Header';
import Footer from './Footer';
import DocView from './DocView';
import SuccessStories from './SuccessStories';
import Meetings from './Meetings';
import UploadForm from './UploadForm';
import SuccessSubmission from './SuccessSubmission';
import LoanSanctioned from './LoanSanctioned';
import SuccessList from './success-components/successList';
import SuccessView from './success-components/successView';
import Downloads from './Downloads';

const App = (): JSX.Element => (
    <div>
        <Header />
        <main>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/search' component={Main} />
                <Route exact path='/doc' component={DocView} />
                <Route exact path='/success-stories' component={SuccessStories} />
                <Route exact path='/meetings' component={Meetings} />
                <Route exact path='/upload' component={UploadForm} />
                <Route exact path='/success-submit' component={SuccessSubmission} />
                <Route exact path='/loan-sanctioned' component={LoanSanctioned} />
                <Route exact path='/success-list' component={SuccessList} />
                <Route exact path='/success-doc' component={SuccessView} />
		<Route exact path='/downloads' component={Downloads} />
            </Switch>
        </main>
        <Footer />
    </div>
);

export default App;
