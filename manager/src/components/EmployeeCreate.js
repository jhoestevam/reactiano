import React, {Component} from 'react';
import {Picker, Text} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate} from "../actions";
import {Card, CardSection, Input, Button} from './common';

class EmployeeCreate extends Component{
    render(){
        return (
        <Card>

            <CardSection>
                <Input
                    label="Nome"
                    placeholder="Mary Jane"
                    value={this.props.name}
                    onChangeText={value => this.props.employeeUpdate({prop: 'name', value})}
                />
            </CardSection>

            <CardSection>
                <Input
                    label="Telefone"
                    placeholder="(45) 99999-9999"
                    value={this.props.phone}
                    onChangeText={value => this.props.employeeUpdate({props: 'phone', value})}
                />
            </CardSection>

            <CardSection style={{flexDirection: 'column'}}>
                <Text style={styles.pickerText}>Shift</Text>
                <Picker
                    style={{flex: 1}}
                    selectedValue={this.props.shift}
                    onValueChange={value => this.props.employeeUpdate({props: 'shift', value})} >
                    <Picker.Item label="Domingo" value="Domingo"/>
                    <Picker.Item label="Segunda" value="Segunda"/>
                    <Picker.Item label="Terça" value="Terça"/>
                    <Picker.Item label="Quarta" value="Quarta"/>
                    <Picker.Item label="Quinta" value="Quinta"/>
                    <Picker.Item label="Sexta" value="Sexta"/>
                </Picker>
            </CardSection>

            <CardSection>
                <Button>Create</Button>
            </CardSection>
        </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const {nome, phone, shift} = state.employeeForm();
    return {nome, phone, shift}
};

const styles = {
    pickerText: {
        fontSize: 18,
        paddingLeft: 20
    }
};

export default connect(mapStateToProps(), {employeeUpdate})(EmployeeCreate);