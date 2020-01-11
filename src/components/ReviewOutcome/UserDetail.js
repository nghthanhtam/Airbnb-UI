import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView, Dimensions, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { height, width } = Dimensions.get('window');

class UserDetail extends React.Component {
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
            <ScrollView scrollEventThrottle={20} alignItems='center' showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'column', paddingLeft: 20, paddingRight: 20, }}>
                    <View style={{ paddingTop: 30, flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', width: 160 }}>
                            <Text style={{ fontSize: 25, }}>Hi, I'm Sam </Text>
                            <Text style={{ fontSize: 16, }}>Joined in May, 2018</Text>
                            <View style={{ paddingTop: 20, flexDirection: 'row' }}>
                                <Icon name="edit"
                                    color='#FF5A60'
                                    size={20}
                                />
                                <Text style={{ fontSize: 16, paddingLeft: 20 }}>2 Reviews</Text>
                            </View>
                        </View>
                        <TouchableHighlight underlayColor='#ff7479' style={styles.button} >
                            <Icon name="user"
                                color='#FF5A60'
                                size={40}
                                style={styles.icon}
                            />
                        </TouchableHighlight>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <View
                            style={{
                                borderBottomColor: '#bfbfbf',
                                borderBottomWidth: 1,
                                paddingTop: 25,
                                width: 335,
                            }}
                        />
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: '700', paddingTop: 20 }}>About</Text>
                    <Text style={{ fontSize: 16, paddingTop: 20 }}>Lives in Dundee, United Kingdom</Text>

                    <View style={{ alignItems: 'center' }}>
                        <View
                            style={{
                                borderBottomColor: '#bfbfbf',
                                borderBottomWidth: 1,
                                paddingTop: 25,

                                width: 335,
                            }}
                        />
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: '700', paddingTop: 20 }}>2 reviews</Text>
                    <Text style={{
                        color: '#018F84', fontSize: 17, textDecorationLine: 'underline',
                        paddingTop: 15, paddingBottom: 20
                    }}>From hosts
                    </Text>
                    <View style={{ flex: 2, flexDirection: 'row', paddingBottom: 20 }}>
                        <TouchableHighlight underlayColor='#ff7479' style={styles.buttonReview} >
                            <Icon name="user"
                                color='#FF5A60'
                                size={25}
                                style={styles.icon}
                            />
                        </TouchableHighlight>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ fontSize: 15, fontWeight: '700', paddingBottom: 5 }}>Sam Smith</Text>
                            <Text style={{ fontSize: 13, }}>This is great</Text>
                        </View>
                    </View>

                    {this.state.isReadMore ? (
                        <View style={{ flex: 2, flexDirection: 'column' }}>
                            <View style={{ flex: 2, flexDirection: 'row', paddingBottom: 20 }}>
                                <TouchableHighlight style={styles.buttonReview} >
                                    <Icon name="user"
                                        color='#FF5A60'
                                        size={25}
                                        style={styles.icon}
                                    />
                                </TouchableHighlight>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 15, fontWeight: '700', paddingBottom: 5 }}>Sam Smith</Text>
                                    <Text style={{ fontSize: 13, }}>This is great</Text>
                                </View>
                            </View>
                            <View style={{ flex: 2, flexDirection: 'row', paddingBottom: 20 }}>
                                <TouchableHighlight style={styles.buttonReview} >
                                    <Icon name="user"
                                        color='#FF5A60'
                                        size={25}
                                        style={styles.icon}
                                    />
                                </TouchableHighlight>
                                <View style={{ flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 15, fontWeight: '700', paddingBottom: 5 }}>Sam Smith</Text>
                                    <Text style={{ fontSize: 13, }}>This is great</Text>
                                </View>
                            </View>
                            <View style={{ flex: 2, flexDirection: 'row', paddingBottom: 20 }}>
                                <TouchableHighlight onPress={this.onPress}>
                                    <Text style={{ color: '#018F84', fontSize: 17, paddingBottom: 20, paddingRight: 10 }}>Hide comments</Text>

                                </TouchableHighlight>
                                <Icon name="arrow-circle-up"
                                    color='#018F84'
                                    size={25}
                                />
                            </View>
                        </View>
                    ) : (
                            <View style={{ flex: 2, flexDirection: 'row', paddingBottom: 10 }}>
                                <TouchableHighlight onPress={this.onPress}>
                                    <Text style={{ color: '#018F84', fontSize: 17, paddingBottom: 20, paddingRight: 10 }}>Read more</Text>

                                </TouchableHighlight>
                                <Icon name="arrow-circle-down"
                                    color='#018F84'
                                    size={25}
                                />
                            </View>
                        )
                    }




                    <View style={{ alignItems: 'center' }}>
                        <View
                            style={{
                                borderBottomColor: '#bfbfbf',
                                borderBottomWidth: 1,
                                width: 335,
                            }}
                        />
                    </View>
                    <View style={{ paddingTop: 20, paddingBottom: 10, flexDirection: 'row' }}>
                        <Icon name="edit"
                            color='#018F84'
                            size={20}
                        />
                        <TouchableHighlight underlayColor='white' onPress={this.onReview}>
                            <Text style={{ fontSize: 18, color: '#018F84', paddingLeft: 20 }}>Write reviews</Text>
                        </TouchableHighlight>

                    </View>
                    {this.state.isReview ? (
                        <View style={{ flexDirection: 'column', paddingBottom: 30, flex: 1 }}>
                            <TextInput style={styles.textInput}
                                placeholder="Give this person some reviews...">
                            </TextInput>
                            <TouchableHighlight
                                textAlign='center'
                                underlayColor='grey'
                                onPress={this.onPress1}
                                style={{ height: 30, left: width - 100, width: 70, borderRadius: 5, alignItems: 'center', backgroundColor: '#018F84' }}>
                                <Text style={{ color: 'white', fontSize: 17 }}>Confirm</Text>
                            </TouchableHighlight>
                        </View>

                    ) : (null)}

                </View>

            </ScrollView>
        );
    }
}

export default UserDetail;

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
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 80,
        width: 95,
        height: 95,
        backgroundColor: '#ffa7aa',
        marginLeft: width - 280,
    },
    buttonReview: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 45,
        width: 48,
        height: 48,
        backgroundColor: '#ffa7aa',
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