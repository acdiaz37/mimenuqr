import React from 'react'
import {Switch, Route} from 'react-router-dom';
import PrincipalContainer from './components/PrincipalContainer';
import InicioPage from './components/principalPage/InicioPage';

const Routes = () => {
    return(
        <Switch>
            <Route  exact path='/' component={InicioPage}/>
            <Route  exact path='/app' component={PrincipalContainer}/>
        </Switch>
    )

}

export default Routes;