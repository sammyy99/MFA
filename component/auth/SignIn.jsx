import { View, Text, useColorScheme, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignIn = () => {

  const colorScheme = useColorScheme();

  return (
    <SafeAreaView>
      <StatusBar/>
      <Text>Sign In</Text>
    </SafeAreaView>
  )
}

export default SignIn