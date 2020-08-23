import React from 'react'
import {Switch, Route} from 'react-router-dom';
import PrincipalContainer from './components/PrincipalContainer';
import PrincipalContainer2 from './components/PrincipalContainer2';
import InicioPage from './components/principalPage/InicioPage';
import MostrandoMenu from './components/menuFinal/MostrandoMenu';

const Routes = () => {
    return(
        <Switch>
            <Route  exact path='/' component={InicioPage}/>
            <Route  exact path='/app' component={PrincipalContainer}/>
            <Route  exact path='/menu' component={MostrandoMenu}/>
            <Route  exact path='/main' component={PrincipalContainer2}/>
        </Switch>
    )

}

export default Routes;