import * as React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableHighlight, ScrollView, TextInput } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from 'react-navigation-stack';
import UserDetail from './ReviewOutcome/UserDetail';
import HomeDetail from './BookingOutcome/HomeDetail';
import Step1Host from './BecomeAHostOutcome/Step1Host';
import Step2Host from './BecomeAHostOutcome/Step2Host';
import Step3Host from './BecomeAHostOutcome/Step3Host';
import Country from './SearchOutcome/Country';

const { width } = Dimensions.get('window')

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReview: false,
        }
    }

    onPress = () => {
        const { isReview } = this.state;
        if (isReview) this.setState({ isReview: false });
        else this.setState({ isReview: true })
    }

    render() {
        const { isReview } = this.state;

        return (
            <KeyboardAvoidingView behavior="height" enabled style={{ flex: 1 }}>

                <ScrollView horizontal={false} showsVerticalollIndicator={false}>
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
                                <TouchableHighlight onPress={() => this.props.navigation.navigate('UserDetail')}>
                                    <Text style={{ fontSize: 17, color: '#018F84' }}>View profile </Text>
                                </TouchableHighlight>
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

                        <Text style={{ padding: 20, paddingTop: 40, fontSize: 17, color: 'grey' }}>ACCOUNT SETTINGS </Text>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ paddingLeft: 20, fontSize: 17 }}>Personal Information </Text>
                            <Icon name="user"
                                size={25}
                                style={styles.iconmenu}
                            />
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View
                                style={{
                                    borderBottomColor: '#bfbfbf',
                                    borderBottomWidth: 1,
                                    width: 318,
                                    paddingTop: 20
                                }}
                            />
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text

                                style={{ paddingLeft: 20, paddingTop: 20, fontSize: 17 }}>Booked Houses </Text>
                            <Icon name="home"
                                size={25}
                                style={{
                                    marginLeft: width - 190,
                                    color: 'grey',
                                    paddingTop: 20
                                }}
                            />
                        </View>
                        <Text style={{ paddingLeft: 20, fontSize: 16, color: '#018F84' }}>Noma Hotel </Text>
                        <Text style={{ paddingLeft: 20, fontSize: 16, color: 'grey' }}>Booking code: #01df55 </Text>
                        <Text style={{ paddingLeft: 20, fontSize: 16, color: 'grey' }}>Check-in date: 20/12/2018 </Text>
                        <Text style={{ paddingLeft: 20, fontSize: 16, color: 'grey' }}>Host:
                    <Text onPress={() => this.props.navigation.navigate('UserDetail')} style={{ color: '#018F84' }}> Bob Swagger </Text>
                        </Text>

                        <View style={{ alignItems: 'center' }}>
                            <View
                                style={{
                                    borderBottomColor: '#bfbfbf',
                                    borderBottomWidth: 1,
                                    width: 318,
                                    paddingTop: 20
                                }}
                            />
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ paddingLeft: 20, paddingTop: 20, fontSize: 17 }}>Payments and payouts </Text>
                            <Icon name="money"
                                size={25}
                                style={{
                                    marginLeft: width - 245,
                                    color: 'grey',
                                    paddingTop: 20
                                }}
                            />
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View
                                style={{
                                    borderBottomColor: '#bfbfbf',
                                    borderBottomWidth: 1,
                                    width: 318,
                                    paddingTop: 20
                                }}
                            />
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ paddingLeft: 20, paddingTop: 20, fontSize: 17 }}>Notifications </Text>
                            <Icon name="bell"
                                size={25}
                                style={{
                                    marginLeft: width - 167,
                                    color: 'grey',
                                    paddingTop: 20
                                }}
                            />
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View
                                style={{
                                    borderBottomColor: '#bfbfbf',
                                    borderBottomWidth: 1,
                                    width: 318,
                                    paddingTop: 20
                                }}
                            />
                        </View>
                        <Text style={{ padding: 20, paddingTop: 35, fontSize: 17, color: 'grey' }}>HOSTING </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text onPress={() => this.props.navigation.navigate('Step1Host')}
                                style={{ paddingLeft: 20, fontSize: 17 }}>Become a host </Text>
                            <Icon name="home"
                                size={25}
                                style={{
                                    marginLeft: width - 186,
                                    color: 'grey',
                                }}
                            />
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View
                                style={{
                                    borderBottomColor: '#bfbfbf',
                                    borderBottomWidth: 1,
                                    width: 318,
                                    paddingTop: 20
                                }}
                            />
                        </View>

                        <Text style={{ paddingLeft: 20, paddingTop: 20, fontSize: 17 }}>House listings </Text>

                        <ScrollView
                            style={{ marginTop: 15, marginLeft: 5 }}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            <Country
                                onPress={() => this.props.navigation.navigate('HomeDetail')}
                                imageUri={require('../../assets/home1.jpg')}
                                name="Noma Hotel" />
                            <Country
                                onPress={() => this.props.navigation.navigate('HomeDetail')}
                                imageUri={require('../../assets/home2.jpg')}
                                name="Noma Hotel" />
                            <Country
                                onPress={() => this.props.navigation.navigate('HomeDetail')}
                                imageUri={require('../../assets/home3.jpg')}
                                name="Noma Hotel" />
                            <Country
                                onPress={() => this.props.navigation.navigate('HomeDetail')}
                                imageUri={require('../../assets/home4.jpeg')}
                                name="Noma Hotel" />
                        </ScrollView>

                        <View style={{ alignItems: 'center' }}>
                            <View
                                style={{
                                    borderBottomColor: '#bfbfbf',
                                    borderBottomWidth: 1,
                                    width: 318,
                                    paddingTop: 20
                                }}
                            />
                        </View>

                        <Text style={{ padding: 20, paddingTop: 35, fontSize: 17, color: 'grey' }}>REVIEWS BY YOU </Text>
                        <Text style={{ paddingLeft: 20, fontSize: 17 }}>Places you stayed </Text>

                        <ScrollView
                            style={{ marginTop: 15, marginLeft: 5 }}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                            <View>
                                <Country
                                    onPress={() => this.props.navigation.navigate('HomeDetail')}
                                    imageUri={require('../../assets/home2.jpg')}
                                    name="Noma Hotel" />
                                <Icon
                                    onPress={this.onPress}
                                    name="edit"
                                    color='#FF5A60'
                                    size={18}
                                    style={styles.iconReview}
                                />
                            </View>

                            <Country
                                onPress={() => this.props.navigation.navigate('HomeDetail')}
                                imageUri={require('../../assets/home4.jpeg')}
                                name="Noma Hotel" />
                            <Icon
                                onPress={this.onPress}
                                name="edit"
                                color='#FF5A60'
                                size={18}
                                style={styles.iconReview1}
                            />
                        </ScrollView>

                        {isReview ? (
                            <View style={{ flexDirection: 'column', padding: 20, flex: 1 }}>
                                <TextInput style={styles.textInput}
                                    placeholder="Give this person some reviews...">
                                </TextInput>
                                <TouchableHighlight
                                    textAlign='center'
                                    underlayColor='grey'
                                    onPress={this.onSubmit}
                                    style={{ height: 30, left: width - 100, width: 70, borderRadius: 5, alignItems: 'center', backgroundColor: '#018F84' }}>
                                    <Text style={{ color: 'white', fontSize: 17 }}>Confirm</Text>
                                </TouchableHighlight>
                            </View>
                        ) : (null)}

                        <Text style={{ paddingLeft: 20, paddingTop: 10, fontSize: 17 }}>Past reviews you've written </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ marginLeft: 20, marginTop: 10, flexDirection: 'row' }}>
                                <TouchableHighlight underlayColor='#ff7479' style={styles.buttonava} >
                                    <Icon name="user"
                                        color='#FF5A60'
                                        size={25}
                                        style={styles.iconava}
                                    />
                                </TouchableHighlight>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 15, fontWeight: '700', paddingBottom: 5 }}>Review for Nova Hotel</Text>
                                    <Text style={{ fontSize: 15, }}>This is great</Text>
                                </View>
                            </View>
                        </View>
                    </View >

                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}


const styles = StyleSheet.create({

    icon: {
        marginLeft: 0,
        marginTop: -2,
    },
    iconmenu: {
        marginLeft: width - 225,
        color: 'grey'
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
    iconReview: {
        position: 'absolute',
        marginLeft: 120,
        marginTop: 85,
    },
    iconReview1: {
        position: 'absolute',
        marginLeft: 265,
        marginTop: 85,
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
    iconava: {
        marginRight: 0,
        marginTop: -2,
    },
    buttonava: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 45,
        width: 48,
        height: 48,
        backgroundColor: '#ffa7aa',
        marginRight: 20,
    },
});

const RootStack = createStackNavigator(
    {
        HomeDetail: {
            screen: HomeDetail,
            navigationOptions: {
                header: null,
                footer: null
            }
        },
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
        UserDetail: {
            screen: UserDetail,
            navigationOptions: {
                footer: null
            }
        }
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
