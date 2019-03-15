import React from 'react';
import { Switch, Route } from 'react-router-dom';
// Templates
import Error from '../components/PageTemplates/Error'
import PageTemplate from '../components/PageTemplates/PageTemplate';
import ContentTemplate from '../components/PageTemplates/ContentTemplate'

//Pages
import HomePage from '../components/PageTemplates/Pages/Home';
import AdminPage from '../components/PageTemplates/Pages/Admin'
import ComponentsPage from '../components/PageTemplates/Pages/Components';
import StyleRefPage from '../components/PageTemplates/Pages/StyleRef';
import ColorsPage from '../components/PageTemplates/Pages/Colors';


// Components
import Text from '../components/Text/Text';



const Routes = () => (
    <Switch>
        <Route
            exact
            path="/"
            render={props => (
                <PageTemplate>
                    <HomePage {...props}/>
                </PageTemplate>
            )}
        />
        <Route
            exact
            path="/components"
            render={props => (
                <PageTemplate>
                    <ComponentsPage {...props}/>
                </PageTemplate>
            )}
        />
        <Route
            exact
            path="/style"
            render={props => (
                <PageTemplate>
                    <StyleRefPage {...props}/>
                </PageTemplate>
            )}
        />
        <Route
            exact
            path="/colors"
            render={props => (
                <PageTemplate>
                    <ColorsPage {...props}/>
                </PageTemplate>
            )}
        />
        <Route
            exact
            path="/components/text"
            render={props => (
                <PageTemplate>
                        <ComponentsPage {...props} Layout={<Text/>}/>
                </PageTemplate>
            )}
        />
        <Route
            exact
            path="/admin"
            render={props => (
                <PageTemplate>
                    <AdminPage {...props}/>
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

