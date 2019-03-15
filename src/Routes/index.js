import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Templates
import Error from '../components/PageTemplates/Error'
import PageTemplate from '../components/PageTemplates/PageTemplate';
import ContentTemplate from '../components/PageTemplates/ContentTemplate'

// Components
import Home from '../components/Home';
import Text from '../components/Text/Text';



const Routes = () => (
    <Switch>
        <Route
            exact
            path="/"
            render={props => (
                <PageTemplate>
                    <Home {...props}/>
                </PageTemplate>
            )}
        />
        <Route
            exact
            path="/text"
            render={props => (
                <PageTemplate>
                    <ContentTemplate>
                        <Text {...props}/>
                    </ContentTemplate>
                </PageTemplate>
            )}
        />
        <Route
            render={props => (
                <PageTemplate>
                    <Error {...props}  />
                </PageTemplate>
            )}
        />
    </Switch>
);

export default Routes;

