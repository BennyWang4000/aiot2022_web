import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Action_bar from './index/action_bar';

export default (
    <HashRouter>
        <div>
            <Route path="/" component={Action_bar} />
        </div>
    </HashRouter>
);