import React from 'react';

import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';

import Footer from 'common/components/Footer';
import Header from 'common/components/Header';

import {Dashboard} from 'dashboard/components';

export const App = () => {

    return (
        <HashRouter>
            <Header />
                <Switch>
                    <Route render={Dashboard}/>
                </Switch>
            <Footer />
        </HashRouter>
    );
};

export default App;
