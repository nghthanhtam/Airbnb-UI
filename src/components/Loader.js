import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View, Text, Image, Modal, StyleSheet } from 'react-native';
import colors from '../styles/colors';

export default class Loader extends Component {

    render() {
        const { animationType, modalVisible } = this.props;
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={true}>
                <View style={styles.wrapper}>
                    <View style={styles.loaderContainer}>
                        <Image
                            style={styles.loaderImage}
                            source={require('../img/done.gif')} />
                        <View styles={{ width: 200, height: 100, paddingLeft: 50, backgroundColor: 'grey' }}>
                            <Text styles={{ marginLeft: 100, fontsize: 30 }}>Your booking order is: #01df55 </Text>
                        </View>
                    </View>
                </View>

            </Modal >

        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        zIndex: 9,
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
    },
    loaderImage: {
        width: 90,
        height: 90,
        borderRadius: 15
    },
    loaderContainer: {
        width: 200,
        height: 150,
        backgroundColor: colors.white,
        borderRadius: 15,
        position: 'absolute',
        left: '40%',
        top: '50%',
        marginLeft: -45,
        marginTop: -45,
    },
    loaderImage: {
        marginLeft: 50,
        width: 90,
        height: 90,
        borderRadius: 15,
    }
});

Loader.propTypes = {
    animationType: PropTypes.string.isRequired,
    modalVisible: PropTypes.bool.isRequired,
}
