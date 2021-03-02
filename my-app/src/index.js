import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Game from './game.js';
import BSExample from './bs_example.js';
import NavBar from './navbar.js';
import HomePage from './HomePage.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function BootStrapRow() {
    return (
        <div className="row mt-3">
            <div className="col-sm">
                <BSExample />
                Some text
            </div>
        </div>
    );
}

function App() {

    const [currentPage, setCurrentPage] = useState("Home");

    function navigateTo(e, page) {
        e.preventDefault();
        console.log("switching to page = " + page);
        setCurrentPage(page);
    }

    let dynamicContent;
    if (currentPage === "Home") {
        dynamicContent = <HomePage />
    }
    else if (currentPage === "Tic Tac Toe") {
        dynamicContent = <Game />
    }
    else if (currentPage === "Bootstrap Demo") {
        dynamicContent = <BootStrapRow />
    }
    else {
        console.error("We should never reach this.");
    }

    return (
        <div className="container">
            <NavBar 
                selectedPage={ currentPage }
                onClick={(e, page) => navigateTo(e, page)}
            />
            {dynamicContent}
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
