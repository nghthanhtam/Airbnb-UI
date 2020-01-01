import React, { Component } from 'react';
import { transparentHeaderStyle } from '../styles/navigation';
import LoggedInTabNavigation from '../Navigators/LoggedInTabNavigator'

export default class LoggedIn extends Component {
    render() {
        return (
            <LoggedInTabNavigation />
        );
    }
}