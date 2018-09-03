import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {
    Card,
    CardSection,
    Input,
    Button,
    Spinner
} from "./common";

class LoginForm extends React.Component{
    onChangeEmail(text) {
        this.props.emailChanged(text);
    }

    onChangePassword(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const {email, password} = this.props;

        this.props.loginUser({email, password})
    }

    renderError() {
        if (this.props.error) {
            return(
                <View style={{backgroundColor: 'white'}}>
                    <Text style={style.errorText}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton() {
        if (this.props.loading) {
            return(
                <Spinner size="large"/>
            )
        }

        return(
            <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
        )
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onChangeEmail().bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onChangePassword().bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    }
};

const style = {
    errorText: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default connect(mapStateToProps(), {emailChanged, passwordChanged, loginUser})(LoginForm);