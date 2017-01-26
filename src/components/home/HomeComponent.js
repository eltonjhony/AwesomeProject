'use strict';

// Native React components
import { AppRegistry } from 'react-native'
import React, { Component } from 'react'
import { View } from 'react-native'
import { Text } from 'react-native'
import { ToolbarAndroid } from 'react-native'
import { Button } from 'react-native'

// Custom React components
import ScrollingImageWithTextComponent from '../image-with-text/ScrollingImageWithTextComponent'
import BlinkComponent from '../blink/BlinkComponent'

import RouterUtils from '../../utils/router/Router'

// Custom stylesheet imports
import HomeStyle from '../styles/home/style'

import ToolbarStyle from '../styles/toolbar/style'

export default class HomeComponent extends React.Component {
    render() {
        let message = {
            description: 'On iOS, a React Native ScrollView uses a native UIScrollView. On Android, it uses a native ScrollView. On iOS, a React Native Image uses',
            blink: 'Yes blinking is so great'
        };
        return (
            <View>
                <ToolbarAndroid style={ToolbarStyle.toolbar}
                                title={this.props.title}
                                titleColor={'#FFFFFF'}>
                </ToolbarAndroid>
                <View style={HomeStyle.container}>
                    <ScrollingImageWithTextComponent description={message.description} />
                    <BlinkComponent text={message.blink} />
                    <View>
                        <Button onPress={() => RouterUtils.performNavigation(RouterUtils.DICTIONARY_PAGE_KEY, { text: 'bala' }) }
                                title="OPEN DICTIONARY" >
                            <Text>OPEN DICTIONARY</Text>
                        </Button>
                    </View>
                </View>
            </View>
        )
    }
}