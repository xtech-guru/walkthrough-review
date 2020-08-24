import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { startWalkthrough, WalkthroughElement } from 'react-native-walkthrough';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu
} from 'react-navigation-header-buttons';

import { Settings, TabOne, TabTwo } from '../screens';
import walkthrough from '../utils/walkthrough';

const MaterialHeaderButton = (props) => (
  <HeaderButton
    {...props}
    IconComponent={MaterialIcon}
    iconSize={23}
    color="#ffffff"
  />
);

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = function () {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#4285f4'
        },
        activeTintColor: '#ffffff'
      }}>
      <Tab.Screen name="tab1" component={TabOne} />
      <Tab.Screen name="tab2" component={TabTwo} />
    </Tab.Navigator>
  );
};

const homeScreenOptions = {
  headerTintColor: '#ffffff',
  headerStyle: {
    backgroundColor: '#4285f4',
    elevation: 0
  },
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
      <WalkthroughElement id="btn-search">
        <Item
          title="search"
          iconName="search"
          onPress={() => alert('search')}
        />
      </WalkthroughElement>
      <WalkthroughElement id="btn-settings">
        <Item
          title="settings"
          iconName="settings"
          onPress={() => alert('settings')}
        />
      </WalkthroughElement>
      <OverflowMenu
        style={{ marginHorizontal: 10 }}
        OverflowIcon={
          <MaterialIcon name="more-vert" size={23} color="#ffffff" />
        }>
        <HiddenItem title="option1" onPress={() => alert('option1')} />
        <HiddenItem title="option2" onPress={() => alert('option1')} />
      </OverflowMenu>
    </HeaderButtons>
  )
};

const Navigator = function () {
  useEffect(() => {
    startWalkthrough(walkthrough);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={homeScreenOptions}
        />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
