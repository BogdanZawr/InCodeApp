
import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import '../App.css';

import SearchList from './components/SearchList';
import UserInfo from './components/UserInfo';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import Signup from './components/Signup';
import Login from './components/Login';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Switch>
                    <Route exact path='/' component={SearchList}/>
                    <Route path='/User/:id' component={UserInfo} />
                    <Route path='/CreateNewUser' component={CreateUser} />
                    <Route path='/EditUser/:id'component={EditUser} />
                    <Route path='/Login' component={Login} />
                    <Route path='/Signin' component={Signup} />
                </Switch>
            </div>
        );
    }
}

export default App;
