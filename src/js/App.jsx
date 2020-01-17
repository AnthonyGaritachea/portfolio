import React from 'react';

import NavBar from './components/NavBar.jsx';
import Header from './components/Header.jsx';
import Body from './components/Body.jsx';

class App extends React.Component {
    render(){
        return (
            <div>
                <NavBar/>                
                <Header/>
                <Body/>
            </div>
        )
    }
};

export default App;