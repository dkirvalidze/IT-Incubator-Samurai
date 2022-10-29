import React from 'react';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';


const App = function () {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <div className='App-content'>
                <Dialogs />
                {/* <Profile /> */}
            </div>
        </div>
    );
}

export default App;
