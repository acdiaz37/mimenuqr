import React from 'react'
import {Switch, Route} from 'react-router-dom';
import PrincipalContainer from './components/PrincipalContainer';

const Routes = () => {
    return(
        <Switch>
            <Route  exact path='/app' component={PrincipalContainer}/>
        </Switch>
    )

}

export default Routes;