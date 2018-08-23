import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import Home from './Home';
import User from './User';
class App extends Component{
    render(){
        return(
            <div>
                <Route exact path="/"  component={Home}/>
                <Route path="/user" component={User}/>
            </div>
        )
    }
};
export default App;