import React from "react";
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import withRoot from "./modules/withRoot";
import Privacy from "./pages/Privacy";
import NotFound404 from './404';

function Articles() {
    const { path } = useRouteMatch()

    return (
        <React.Fragment>
            <Switch>
                <Route path={`${path}/privacy`}>
                    <Privacy />
                </Route>
                <Route component={NotFound404} />
            </Switch>
        </React.Fragment>
    )
}

export default withRoot(Articles);