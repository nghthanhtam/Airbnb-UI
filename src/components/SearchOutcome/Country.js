import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

class Country extends Component {
    render() {
        return (
            <View style={{ height: 120, width: 130, marginLeft: 15, borderWidth: 0.5, borderColor: '#dddddd' }}>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }} />
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text>{this.props.name}</Text>
                </View>

            </View>
        );
    }
}

export default Country;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});