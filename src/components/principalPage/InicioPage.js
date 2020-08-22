import React from 'react'

const InicioPage = () => {
    return (<>

     <div className="container my-5">
    <div className="jumbotron">
        <img src={process.env.PUBLIC_URL + '/images/menu.png'} width="100" alt="menu"/>
        <h1 className="display-3">Bienvenido! Mi menuQR</h1>
        <p>Mi menuQR, es la forma mas simple de mostrar el menu de tu restaurante de forma digital</p>
        <p className="lead">
            <a href="/app" className="btn btn-primary btn-lg">Inicia Aqui</a>
        </p>
    </div>
    </div>  

    </>);
}
 
export default InicioPage;