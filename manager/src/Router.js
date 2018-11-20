import React from 'react';
import {Router, Scene, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Sign in" initial />
                </Scene>
                <Scene key="main">
                    <Scene rightTitle="App" onRight={() => Actions.employeeCreate} key="employeeList" title="Employees" component={EmployeeList} initial />
                    <Scene key="employeeCreate" title="Create Employee" component={EmployeeCreate} />
                </Scene>
            </Scene>
        </Router>
    )
};

export default RouterComponent();