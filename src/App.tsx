import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';


const App = function () {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Navbar />
                <div className='App-content'>
                    <Route path ='/dialogs'component={Dialogs} />
                    <Route path = '/profile' component={Profile} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
