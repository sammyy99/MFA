import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import Bookmark from './Bookmark'
import Search from './Search'
import Profile from './Profile'

const TabNavigator = () => {

    const Tab = createBottomTabNavigator();

  return (
        <Tab.Navigator>
          <Tab.Screen name='Home' component={Home}/>
          <Tab.Screen name='Bookmark' component={Bookmark}/>
          <Tab.Screen name='Search' component={Search}/>
          <Tab.Screen name='Profile' component={Profile}/>
        </Tab.Navigator>
  )
}

export default TabNavigator;