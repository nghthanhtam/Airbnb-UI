import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import FilterBox from './FilterBox'
import DropdownBox from './DropdowBox';
import { YellowBox } from 'react-native';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdowBox: false,
            name: '',
            marginLeft: 0,
        }
    }

    onPress = (name) => {
        if (this.state.dropdowBox === false) {
            this.setState({ dropdowBox: true })
            this.setState({ name: name })
        } else {
            this.setState({ dropdowBox: false })

        }
        if (name === 'Dates') this.setState({ marginLeft: 0 })
        else if (name === 'Types') this.setState({ marginLeft: 100 })
        else if (name === 'Guests') this.setState({ marginLeft: 5 })
        else if (name === 'Prices') this.setState({ marginLeft: 150 })
        else this.setState({ marginLeft: 150 })
    }

    render() {
        const { dropdowBox } = this.state;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View flexDirection="column">
                    <View style={{ height: 80, paddingTop: 30 }}>
                        {/* <View style={styles.safeAreaView}>
                        </View> */}
                        <View style={styles.searchField}>
                            <Icon name="ios-search" size={20} color="grey" />
                            <TextInput
                                style={styles.searchInput}
                                placeholder="Try new with Hogo"
                                placeholderTextColor="grey"
                            />
                        </View>
                        <Animated.View style={{ flexDirection: "row", padding: 10, position: 'relative', justifyContent: 'space-between' }}>
                            <FilterBox name="Dates" onPress={() => this.onPress('Dates')} />
                            <FilterBox name="Guests" onPress={() => this.onPress('Guests')} />
                            <FilterBox name="Types" onPress={() => this.onPress('Types')} />
                            <FilterBox name="Prices" onPress={() => this.onPress('Prices')} />
                            <FilterBox name="Filters" onPress={() => this.onPress('Filters')} />
                        </Animated.View>
                        {dropdowBox ? (
                            <Animated.View style={{ flexDirection: "row", padding: 10, position: 'relative', justifyContent: 'space-between' }}>
                                <DropdownBox name={this.state.name} marginLeft={this.state.marginLeft} />
                            </Animated.View>) : null}

                    </View>
                </View>
            </SafeAreaView>

        );
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    safeAreaView: {
        height: 80,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd'
    },
    searchInput: {
        flex: 1,
        paddingLeft: 20,
        fontWeight: '300',
        backgroundColor: 'white',
    },
    searchField: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: 'white',
        marginHorizontal: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        justifyContent: 'center',
    },
    text: {
        fontWeight: '700',
        fontSize: 12
    }

});