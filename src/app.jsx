import React from 'react';

import {
    HashRouter,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';

export const App = () =>
    <HashRouter>

        <Switch>
            <Redirect from='/' to='/welcome'/>
        </Switch>

    </HashRouter>;

export default App;