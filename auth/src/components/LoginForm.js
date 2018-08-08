import React, {Component} from 'react';
import {Button, CardSection, Card, Input} from "./common";

export default class LoginForm extends Component{
    state = {email: '', password: ''};

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

                <CardSection>
                    <Button>Log in</Button>
                </CardSection>
            </Card>
        );
    }
}