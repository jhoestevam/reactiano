import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {CardSection} from "./common";
import * as actions from '../actions';

class ListItem extends Component{
    renderDescription() {
        const {library, expanded} = this.props;

        if (expanded) {
            return (
                <Text>{library.description}</Text>
            );
        }
    }

    render() {
        const {id, title} = this.props.library;

        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectedLibrary(id)}>
                <View>
                    <CardSection>
                        <Text>{title}</Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibrary === ownProps.library.id;
    return {expanded}
};

export default connect(mapStateToProps, actions)(ListItem);