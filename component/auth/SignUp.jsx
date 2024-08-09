import { View, Text, useColorScheme, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignUp = () => {

    const colorScheme = useColorScheme();

  return (
    <SafeAreaView>
      <StatusBar/>
      <Text>Sign Up</Text>
    </SafeAreaView>
  )
}

export default SignUp