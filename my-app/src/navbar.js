import React from 'react';
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function createButtonFor(pageName, props) {
    let retval;
    if (pageName === props.selectedPage) {
        retval = <button className="nav-link active link-button" aria-current="page" onClick={(e) => props.onClick(e, pageName)}>{pageName}</button>
    }
    else {
        retval = <button className="nav-link link-button" onClick={(e) => props.onClick(e, pageName)}>{pageName}</button>
    }

    return retval;
}

export default function NavBar(props) {
    console.log("Setting current page to " + props.selectedPage);

    let homeButton = createButtonFor("Home", props);
    let ticTacToeButton = createButtonFor("Tic Tac Toe", props);
    let bootstrapDemoButton = createButtonFor("Bootstrap Demo", props);    
    
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light mb-5">
            <div className="container-fluid">
                <div className="navbar-nav">
                    {homeButton}
                    {ticTacToeButton}
                    {bootstrapDemoButton}
                </div>
            </div>
        </nav>
    );
}
