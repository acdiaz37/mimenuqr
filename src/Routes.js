import React from 'react'
import {Switch, Route} from 'react-router-dom';
import PrincipalContainer from './components/PrincipalContainer';
import InicioPage from './components/principalPage/InicioPage';
import MostrandoMenu from './components/menuFinal/MostrandoMenu';

const Routes = () => {
    return(
        <Switch>
            <Route  exact path='/' component={InicioPage}/>
            <Route  exact path='/app' component={PrincipalContainer}/>
            <Route  exact path='/menu' component={MostrandoMenu}/>
        </Switch>
    )

}

export default Routes;