import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Button, Header, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component{
    state = {loggedIn: null};

    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyDTZSgAZD2qPY423epez785S4ieg__jig8",
            authDomain: "auth-944c0.firebaseapp.com",
            databaseURL: "https://auth-944c0.firebaseio.com",
            projectId: "auth-944c0",
            storageBucket: "auth-944c0.appspot.com",
            messagingSenderId: "217151043551"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            }else{
                this.setState({loggedIn: false});
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPressButton={() => firebase.auth().signOut()}>Log out</Button>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large"/>;
        }
    }

    render(){
        return (
            <View>
                <Header headerText="Authentiocation"/>
                {this.renderContent()}
            </View>
        );
    }
}