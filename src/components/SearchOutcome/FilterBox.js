import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Animated } from 'react-native';

class FilterBox extends Component {
    constructor(props) {
        super(props)
        this.state = { count: 0 }
    }
    // onPress = () => {
    //     this.setState({ backgroundColor: '#018f84' })
    //     this.props.onPress();
    // }
    render() {

        return (
            <TouchableHighlight underlayColor='grey'
                onPress={this.props.onPress}>
                <View style={styles.filterBox}>
                    <Text style={styles.text}> {this.props.name} </Text>
                </View>
            </TouchableHighlight>
        );
    }
}

export default FilterBox;

const styles = StyleSheet.create({
    text: {
        fontWeight: '700',
        fontSize: 12
    },
    filterBox: {
        minHeight: 20,
        minWidth: 40,
        padding: 11,
        //backgroundColor: '#018f84',
        borderColor: '#dddddd',
        borderWidth: 1,
        borderRadius: 2,
        justifyContent: 'center',
    },

});
