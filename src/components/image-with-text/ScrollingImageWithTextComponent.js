'use strict';

import React, { Component } from 'react'
import { Text } from 'react-native'
import { Image } from 'react-native'
import { ScrollView } from 'react-native'

import ImageWithTextStyle from '../styles/image-with-text/style'

export default class ScrollingImageWithTextComponent extends React.Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <ScrollView>
                <Image source={pic} style={ImageWithTextStyle.image}></Image>
                <Text>{this.props.description}</Text>
            </ScrollView>
        )
    }
}