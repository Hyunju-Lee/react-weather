import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Header from  './components/Header';
import Home from  './components/Home';
import About from  './components/About';

class App extends Component {
    componentsDidMount() {
        console.log('Component DID MOUNT')
    }

    render() {
      const name = 'HyunjuLee' ;

      return (
       <BrowserRouter>
        <div className="App">
            <Route exact path="/" component={Home} />
            <Route path="About" component={About} />
            <Header name={name} foo="bar" hello="world" />
            <Route
              path="/List"
              render={() => {
               return <div>List</div>;
            }} />
        </div>
       </BrowserRouter>
       );
    }
}


//function App() {
//}

export default App;