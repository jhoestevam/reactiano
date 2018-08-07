import React, {Component} from 'react';
import {View, TextInput} from 'react-native';
import {Button, CardSection, Card} from "./common";

export default class LoginForm extends Component{
    render() {
        return(
            <Card>
                <CardSection>
                    <TextInput style={{height: 20, width: 100}}/>
                </CardSection>

                <CardSection></CardSection>

                <CardSection>
                    <Button>Log in</Button>
                </CardSection>
            </Card>
        );
    }
}