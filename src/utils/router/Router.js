'use strict'

import { Actions } from 'react-native-router-flux'

export default class RouterUtils {

    static HOME_PAGE_KEY = "home";
    static DICTIONARY_PAGE_KEY = "dictionary";

    static performNavigation(routerKey, params?) {

        switch (routerKey) {
            case RouterUtils.HOME_PAGE_KEY:
                return Actions.home()
            case RouterUtils.DICTIONARY_PAGE_KEY:
                return Actions.dictionary(params)
            default:
                return Actions.home()
        }
    }
}