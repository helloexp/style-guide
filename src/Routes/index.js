import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Templates
import Error from '../components/PageTemplates/Error'
import PageTemplate from '../components/PageTemplates/PageTemplate';
import PageSideNavTemplate from '../components/PageTemplates/PageSideNavTemplate'
import AdminContent from '../components/PageTemplates/AdminContentTemplate';


//Pages
import HomePage from '../components/PageTemplates/Pages/Home';
import AdminPage from '../components/Admin/Admin'
import ContentsPage from '../components/PageTemplates/Pages/Contents';
import ColorsPage from '../components/PageTemplates/Pages/Colors';
import LoginPage from '../components/Auth/Login';
import AddContentPage from '../components/Admin/Forms/AddItem';
import EditContentPage from '../components/Admin/Forms/EditItem';


// Containers
import AuthContainer from '../Containers/Auth/Auth';
import AdminContainer from '../Containers/Admin';
import ContentsContainer from '../Containers/Contents';

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
            path="/guide/:type"
            exact

            render={props => (
                <PageTemplate>
                    <ContentsContainer {...props} Layout={ContentsPage}/> 
                </PageTemplate>
            )}
        />
        <Route
            exact

            path="/guide/:type/:slug"
            render={props => (
                <PageTemplate>
                    <ContentsContainer {...props} Layout={ContentsPage}/> 
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
            path="/dashboard"
            render={props => (
                <PageSideNavTemplate>
                    <AdminContainer {...props} Layout={AdminPage}/>
                </PageSideNavTemplate>
            )}
        />
        <Route
            exact
            path="/dashboard/:type/"
            render={props => (
                <PageSideNavTemplate>
                    <AdminContainer {...props} Layout={AdminContent}/>
                </PageSideNavTemplate>
            )}
        />

        <Route
            exact
            path="/login"
            render={props => (
                <PageTemplate>
                   <AuthContainer {...props} Layout={LoginPage}/>
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

