import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header} from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component{
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyDTZSgAZD2qPY423epez785S4ieg__jig8",
            authDomain: "auth-944c0.firebaseapp.com",
            databaseURL: "https://auth-944c0.firebaseio.com",
            projectId: "auth-944c0",
            storageBucket: "auth-944c0.appspot.com",
            messagingSenderId: "217151043551"
        });
    }

    render(){
        return (
            <View>
                <Header headerText="Authentiocation"/>
                <LoginForm />
            </View>
        );
    }
}