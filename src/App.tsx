import React from 'react';
import './App.css';


const App = function () {
    return (
        <div className="App">
            <header className={"header"}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                    alt=""/>
            </header>
            <nav className={"nav"}>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
            </nav>
            <div className={"content"}>
                <img src={"https://cdn.techjuice.pk/wp-content/uploads/2019/01/react.jpeg"}/>
                Main content
            </div>
        </div>
    );
}

export default App;
