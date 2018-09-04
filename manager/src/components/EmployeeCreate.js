import React, {Component} from 'react';
import {Card, CardSection, Input, Button} from './common';

export default class EmployeeCreate extends Component{
    render(){
        return (
        <Card>
            <CardSection>
                <Input
                    label="Nome"
                    placeholder="Mary Jane"
                    />
            </CardSection>

            <CardSection>
                <Input
                    label="Telefone"
                    placeholder="(45) 99999-9999"
                />
            </CardSection>

            <CardSection>

            </CardSection>

            <CardSection>
                <Button>Create</Button>
            </CardSection>
        </Card>
        )
    }
}