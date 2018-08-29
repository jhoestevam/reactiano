import React from 'react';
import {Provider} from 'react-redux';
import LoginForm from './components/LoginForm';
import {createStore} from 'redux';
import firebase from 'firebase';
import reducers from './reducers';

export default class App extends React.Component{
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyAhhPEdAgTQkvZUyGViyVZBioIOWYSkSp0",
            authDomain: "manager-79ecb.firebaseapp.com",
            databaseURL: "https://manager-79ecb.firebaseio.com",
            projectId: "manager-79ecb",
            storageBucket: "manager-79ecb.appspot.com",
            messagingSenderId: "350504839077"
        };

        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm/>
            </Provider>
        );
    }
}