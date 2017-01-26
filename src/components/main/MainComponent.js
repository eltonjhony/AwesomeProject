'use strict'

import React, {Component} from 'react'
import { View } from 'react-native'
import { Text } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'

import DictionaryComponent from '../dictionary/DictionaryComponent'
import HomeComponent from '../home/HomeComponent'

import RouterUtils from '../../utils/router/Router'

export default class MainComponent extends Component {

    render() {
        return (
            <Router>
                <Scene key="root">
                    <Scene key={RouterUtils.HOME_PAGE_KEY} component={HomeComponent} title="AwesomeApp" initial={true}></Scene>
                    <Scene key={RouterUtils.DICTIONARY_PAGE_KEY} component={DictionaryComponent} title="DictionaryApp"></Scene>
                </Scene>
            </Router>
        )
    }

}