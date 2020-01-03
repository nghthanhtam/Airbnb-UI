import React, { Component, Fragment } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ScrollView, Dimensions, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const { height, width } = Dimensions.get('window')

class InboxDetail extends React.Component {

    render() {
        const { name, comments, time } = this.props;
        return (
            <React.Fragment>
                <View style={{ flexDirection: 'row', paddingBottom: 20 }}>
                    <TouchableHighlight underlayColor='#ff7479' style={styles.avatar}
                        onPress={this.props.onPress}>
                        <Icon name="user"
                            color='#bfbfbf'
                            size={25}
                            style={styles.icon}
                        />
                    </TouchableHighlight>
                    <View style={{ flexDirection: 'column', width: 202 }}>
                        <Text style={{ fontSize: 22, color: '#018F84', fontWeight: '600', paddingBottom: 5 }}>{name}</Text>
                        <Text style={{ fontSize: 18, color: 'grey', marginRight: 5 }}>{comments}</Text>
                    </View>
                    <Text style={{ fontSize: 13, color: 'grey', marginTop: 8, }}>{time}</Text>
                </View>

                <View style={{ alignItems: 'center', paddingBottom: 20 }}>
                    <View
                        style={{
                            borderBottomColor: '#bfbfbf',
                            borderBottomWidth: 1,
                            width: 320,
                        }}
                    />
                </View>
            </React.Fragment>
        );
    }
}

export default InboxDetail;
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

