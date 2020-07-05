import React, { Component } from 'react';
import Routes from './routes';
import './config/StatusBarConfig';

const App = () => <Routes />;

/*
mesmo que: 
class App extends Component {
    render () {
        return <Routes />
    }
}
porém assim temos mais funções, como por exemplo o estado.
usamos sintax de função quando só utilizamos o métodos render.
*/

export default App;