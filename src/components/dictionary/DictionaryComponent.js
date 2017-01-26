'use strict'

import React, { Component } from 'react'
import { ToolbarAndroid } from 'react-native'
import { View } from 'react-native'
import { Text } from 'react-native'
import { TextInput } from 'react-native'
import { Button } from 'react-native'
import { Actions } from 'react-native-router-flux'

// Json with the data
import english_german from './english_german.json'

import DictonaryStyle from '../styles/dictonary/style'
import ToolbarStyle from '../styles/toolbar/style'

export default class DictionaryComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            output: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            userInput: event.nativeEvent.text
        });
    }

    handleSubmit() {

        var meaning = this.state.userInput in english_german ? english_german[this.state.userInput] : "Not Found";

        // Update the state
        this.setState({
            output: meaning
        });
    }

    render() {
        return (
            <View>
                <ToolbarAndroid style={ToolbarStyle.toolbar}
                                title={this.props.title}
                                navIcon={require('./../../assets/ic_arrow_back_white_24dp.png')}
                                onIconClicked={() => Actions.pop()}
                                titleColor={'#FFFFFF'}>
                </ToolbarAndroid>
                <View style={DictonaryStyle.parent}>
                    <Text>Type Something in English</Text>
                    <TextInput onChange={this.handleChange} value={this.state.userInput}/>
                    <Button onPress={this.handleSubmit} title={'SEARCH'}>
                        <Text> SEARCH </Text>
                    </Button>
                    <Text>{this.state.output}</Text>
                    <Text>{this.props.text}</Text>
                </View>
            </View>
        )
    }
}