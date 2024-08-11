import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import Bookmark from './Bookmark'
import Search from './Search'
import Profile from './Profile'
import { Image } from 'react-native'
import icons from '../../constants/icons'

const TabNavigator = () => {

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
    screenOptions={{
      tabBarStyle:{
        backgroundColor:'#161622', 
        borderTopWidth:1, 
        borderTopColor:'#1E1E2D',
        paddingTop:8,
      },
      tabBarLabelStyle:{
        fontSize:10,
      },
      tabBarActiveTintColor: '#FF8E01',
      tabBarInactiveTintColor: '#CDCDE0',
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        headerShown:false,
        tabBarIcon: ({ color, size }) => (
          <Image
            source={icons.home}
            style={{ width: 16, height: 16, tintColor: color }}
            resizeMode="contain"
          />
        ),
      }}
    />
    <Tab.Screen
      name="Bookmark"
      component={Bookmark}
      options={{
        headerShown:false,
        tabBarIcon: ({ color, size }) => (
          <Image
            source={icons.bookmark}
            style={{ width: 16, height: 16, tintColor: color }}
            resizeMode="contain"
          />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={Search}
      options={{
        headerShown:false,
        tabBarIcon: ({ color, size }) => (
          <Image
            source={icons.search}
            style={{ width: 16, height: 16, tintColor: color }}
            resizeMode="contain"
          />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        headerShown:false,
        tabBarIcon: ({ color, size }) => (
          <Image
            source={icons.profile}
            style={{ width: 16, height: 16, tintColor: color }}
            resizeMode="contain"
          />
        ),
      }}
    />
  </Tab.Navigator>
  )
}

export default TabNavigator;