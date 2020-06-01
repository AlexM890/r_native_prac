import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen'
import Discover from '../screens/Discover'
import Inbox from '../screens/Inbox'
import Profile from '../screens/Profile'
import Upload from '../screens/Upload'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
         screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused ? 'md-home' : 'md-home';
              } else if (route.name === 'Discover') {
                iconName = focused ? 'ios-eye' : 'ios-eye';
              } else if (route.name === 'Inbox') {
                iconName = focused ? 'md-mail' : 'md-mail';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'md-contact' : 'md-contact';
              } else if (route.name === 'Upload') {
                iconName = focused ? 'md-cloud-upload' : 'md-cloud-upload';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'skyblue',
            activeBackgroundColor: 'skyblue',
            inactiveBackgroundColor: 'black',
            style: {height: 60}
          }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Discover" component={Discover} />
        <Tab.Screen name="Inbox" component={Inbox} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Upload" component={Upload} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}