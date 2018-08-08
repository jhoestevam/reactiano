import React, {Component} from 'react';
import {Button, CardSection, Card, Input} from "./common";

export default class LoginForm extends Component{
    state = {email: ''};

    render() {
        return(
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@gmail.com"
                        label="Email"
                        value={this.state.email}
                        onChangeText={value => this.setState({email: value})}
                        style={{height: 20, width: 100}} />
                </CardSection>

                <CardSection>

                </CardSection>

                <CardSection>
                    <Button>Log in</Button>
                </CardSection>
            </Card>
        );
    }
}