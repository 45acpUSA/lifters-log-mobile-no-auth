import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Button, Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import PercentageFinderScreen from '../screens/PercentageFinder'
import PlateMathScreen from '../screens/PlateMath'
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'float' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';

const LinksBackButton = (props) => {
  return (
    <Button
      type="clear"
      icon={
        <Icon
          name="arrow-left"
          size={ 20 }
          color="white"
        />
      }
      onPress={() => props.nav.goBack()}
    />
  )
}


const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
    PercentageFinder: {
      screen: PercentageFinderScreen,
      navigationOptions: ({ navigation }) => ({
        header:
          <Header
            backgroundColor='#626263'
            centerComponent={{ text: 'Percentage Finder', style: { color: '#fff' } }}
            leftComponent={ <LinksBackButton nav={ navigation } /> }
          />
      })
    },
    PlateMath: {
      screen: PlateMathScreen,
      navigationOptions: ({ navigation }) => ({
        header:
          <Header
            backgroundColor='#626263'
            centerComponent={{ text: 'Plate Math', style: { color: '#fff' } }}
            leftComponent={ <LinksBackButton nav={ navigation } /> }
          />
      })
    }
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    LinksStack,
    SettingsStack,
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: '#626263',
      },
    }
  }
)


tabNavigator.path = '';

export default tabNavigator;
