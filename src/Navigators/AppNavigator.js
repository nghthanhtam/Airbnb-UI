import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelper, StackNavigator } from 'reac-navigation';
import LoggedIn from '../screens/LoggedIn';
import LogIn from '../screens/login';
//import ForgotPassword from '../screens/ForgotPassword'
export const AppNavigator = StackNavigator({
    //LoggedOut: {screen: LoggedOut},
    LoggedIn: { screen: LoggedIn },
    LogIn: { screen: LogIn },
    //ForgotPassword: {screen: ForgotPassword},
});

const AppWithNavigatorState = ({ dispatch, nav, listener }) => {
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav, addListener: listener })} />
};

AppWithNavigatorState.propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigatorState);