import { View, Text, SafeAreaView, StatusBar, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView className='flex-1 bg-primary'>
      <StatusBar/>
      <KeyboardAvoidingView>
        <ScrollView contentContainerStyle={{flexGrow:1}}>
          <View>
            <Text className={`text-white`}>Home</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Home