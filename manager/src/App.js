import React from 'react';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';
import {createStore, applyMiddleware} from 'redux';
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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <LoginForm/>
            </Provider>
        );
    }
}