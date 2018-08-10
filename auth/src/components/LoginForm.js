import React, {Component} from 'react';
import {Text} from 'react-native';
import firebase from 'firebase';
import {Button, CardSection, Card, Input, Spinner} from "./common";

export default class LoginForm extends Component{
    state = {email: '', password: '', error: '', loading: false};

    onButtonPress(){
        const {email, password} = this.state;

        this.setState({error: '', loading: true});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginFail() {
        this.setState({
            error: 'Authentication Failed',
            loading: false
        });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="small"/>
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>
        );
    }

    render() {
        return(
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@gmail.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={value => this.setState({email: value})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="password"
                        label="Password"
                        value={this.state.password}
                        onChangeText={value => this.setState({password: value})}
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}


const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};