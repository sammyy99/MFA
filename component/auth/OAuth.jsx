import { View, Text, useColorScheme, StatusBar, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const OAuth = (props) => {

  const colorScheme = useColorScheme();

  return (
    <SafeAreaView className={`flex-1 bg-[#161622] justify-center items-center`}>
      <StatusBar />
      <View>
        <TouchableOpacity>
          <Text className={`text-white`}>Continue with Google</Text>
        </TouchableOpacity>
        <View className={`flex-row justify-between`}>
          <TouchableOpacity onPress={() => { props.navigation.navigate('SignIn') }}>
            <Text className={`text-white`}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { props.navigation.navigate('SignUp') }}>
            <Text className={`text-white`}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default OAuth