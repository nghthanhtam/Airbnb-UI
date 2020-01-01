import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Saved from './src/components/Saved'
import Profile from './src/components/Profile'
import Home from './src/components/SearchOutcome/Home'
import Icon from 'react-native-vector-icons/Ionicons'
import HomeDetail from './src/components/BookingOutcome/HomeDetail'

const MainNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: 'HOME',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-home" size={24} color={tintColor} />
      )
    }
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: 'SAVED',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-heart-half" size={24} color={tintColor} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-person" size={24} color={tintColor} />
      )
    }
  },
});

const App = createAppContainer(MainNavigator);

export default App;

// export default createBottomTabNavigator({
//   Home: {
//     screen: Home,
//     navigationOptions: {
//       tabBarLabel: 'HOME',
//       tabBarIcon: ({ tintColor }) => (
//         <Icon name="md-home" size={24} color={tintColor} />
//       )
//     }
//   },
//   Saved: {
//     screen: Saved,
//     navigationOptions: {
//       tabBarLabel: 'SAVED',
//       tabBarIcon: ({ tintColor }) => (
//         <Icon name="md-heart-half" size={24} color={tintColor} />
//       )
//     }
//   },
//   Profile: {
//     screen: Profile,
//     navigationOptions: {
//       tabBarLabel: 'PROFILE',
//       tabBarIcon: ({ tintColor }) => (
//         <Icon name="md-person" size={24} color={tintColor} />
//       )
//     }
//   },

// }, {
//   tabBarOptions: {
//     activeTintColor: '#FF5A60',
//     inactiveTintColor: 'grey',
//     style: {
//       backgroundColor: 'white',
//       borderTopWidth: 0,

//     }
//   }
// })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});