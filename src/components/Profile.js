import * as React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableHighlight } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './SearchOutcome/Home'
import Step1Host from './BecomeAHostOutcome/Step1Host'
import Step2Host from './BecomeAHostOutcome/Step2Host'
import Step3Host from './BecomeAHostOutcome/Step3Host'
const { height, width } = Dimensions.get('window')

class Profile extends React.Component {

    render() {
        return (
            <View style={{ flexDirection: 'column', paddingBottom: 20 }}>

                <View style={{ flexDirection: 'row', padding: 20, paddingTop: 30 }}>
                    <TouchableHighlight underlayColor='#ff7479' style={styles.buttonReview} >
                        <Icon name="user"
                            color='#FF5A60'
                            size={35}
                            style={styles.icon}
                        />
                    </TouchableHighlight>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 25, fontWeight: '700', paddingBottom: 5 }}>Sam Smith</Text>
                        <Text style={{ fontSize: 15, color: '#018F84' }}>View profile </Text>
                    </View>
                </View>

                <View style={{ alignItems: 'center' }}>
                    <View
                        style={{
                            borderBottomColor: '#bfbfbf',
                            borderBottomWidth: 1,
                            width: 318,
                        }}
                    />
                </View>
                <Text onPress={() => this.props.navigation.navigate('Step1Host')} style={{ padding: 20, fontSize: 20, color: '#018F84' }}>Become a host </Text>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    icon: {
        marginLeft: 0,
        marginTop: -2,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 80,
        width: 120,
        height: 120,
        backgroundColor: '#ffa7aa',
        marginLeft: width - 280,
    },
    buttonReview: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 45,
        width: 80,
        height: 80,
        backgroundColor: '#ffa7aa',
        marginRight: 20,
    },
});

const RootStack = createStackNavigator(
    {
        Profile: {
            screen: Profile,
            navigationOptions: {
                header: null,
                footer: null
            }
        },
        Step1Host: {
            screen: Step1Host,
            navigationOptions: {

                footer: null
            }
        },
        Step2Host: {
            screen: Step2Host,
            navigationOptions: {
                footer: null
            }
        },
        Step3Host: {
            screen: Step3Host,
            navigationOptions: {
                footer: null
            }
        },
    },
    {
        initialRouteName: 'Profile',
    }
);


const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}
