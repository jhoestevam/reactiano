import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {CardSection} from "./common";
import * as actions from '../actions';

class ListItem extends Component{
    render() {
        const {id, title} = this.props.library;

        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectedLibrary(id)}>
                <View>
                    <CardSection>
                        <Text>
                            {title}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default connect(null, actions)(ListItem);