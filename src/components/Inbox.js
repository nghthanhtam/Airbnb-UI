import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView, Dimensions, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import InboxDetail from './InboxDetail';
import UserDetail from './ReviewOutcome/UserDetail';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
const { height, width } = Dimensions.get('window')

class Inbox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isReadMore: false,
            isReview: false
        }
    }
    onPress = () => {
        const { isReadMore } = this.state;
        if (isReadMore) this.setState({ isReadMore: false });
        else this.setState({ isReadMore: true })
    }
    onReview = () => {
        const { isReview } = this.state;
        if (isReview) this.setState({ isReview: false });
        else this.setState({ isReview: true })
    }

    render() {
        return (
            <ScrollView scrollEventThrottle={20} showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'column', paddingLeft: 20, paddingRight: 20, }}>
                    <View style={{ paddingBottom: 30, paddingTop: 50, flexDirection: 'column' }}>
                        <Text style={{ fontSize: 40, fontWeight: '700' }}>Inbox</Text>
                        <Text style={{ fontSize: 18, color: 'grey' }}>You have 2 unread messages</Text>
                    </View>
                    <InboxDetail
                        onPress={() => this.props.navigation.navigate('UserDetail')}
                        name="Sam Smith"
                        comments="Hi Ila, I'm going to move to your house tommorow"
                        time="8:54 pm" />
                    <InboxDetail
                        onPress={() => this.props.navigation.navigate('UserDetail')}
                        name="Bourn"
                        comments="So how can I get that kind of voucher?"
                        time="8:54 pm" />
                    <InboxDetail
                        onPress={() => this.props.navigation.navigate('UserDetail')}
                        name="Donald Trump"
                        comments="Yours is better than my white house :)"
                        time="3:20 pm" />
                </View>

            </ScrollView>
        );
    }
}

//export default Inbox;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        marginLeft: 0,
        marginTop: -2,
    },

    avatar: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 45,
        width: 48,
        height: 48,
        backgroundColor: 'grey',
        marginRight: 20,
    },
    textInput: {
        textAlignVertical: 'top',
        height: 80,
        width: width - 30,
        borderColor: 'gray',
        borderWidth: 1,
        borderColor: '#bfbfbf',
        paddingTop: 10,
        paddingLeft: 10,
        marginBottom: 10
    },
});

const RootStack = createStackNavigator(
    {
        Inbox: {
            screen: Inbox,
            navigationOptions: {
                header: null,
            }
        },
        UserDetail: {
            screen: UserDetail,
            navigationOptions: {

            }
        },
    },
    {
        initialRouteName: 'Inbox',
    }
);

const AppContainer = createAppContainer(RootStack);
export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}