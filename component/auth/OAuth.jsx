import { View, Text, useColorScheme, StatusBar, TouchableOpacity, Platform, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../../constants/images'
import PrimaryButton from '../customComponents/PrimaryButton'

const OAuth = (props) => {

  return (
    <SafeAreaView className={`bg-primary flex-1`}>
      <StatusBar />
      <ScrollView contentContainerStyle={{ flexGrow:1 }}>
       <View className={`flex-1 justify-center items-center`}>
        <View className={`w-full items-center`}>
          <Image className={`w-[130px] h-[35px]`} resizeMode='contain' source={images.logo} />
          <Image className={`max-w-[350px] h-[300px]`} resizeMode='contain' source={images.cards} />
        </View>
        <View className={`relative px-10`}>
          <Text className={`text-white text-2xl text-center font-pbold`}>Discover Endless Possibilities with
            <Text className={`text-secondary-200`}> Aora</Text>
          </Text>
          <Image className={`absolute ${Platform.OS === 'ios'? 'ml-[81.5%]':'ml-[75%]'} mt-[54px] h-[20%] w-[19%]`} resizeMode='contain' source={images.path} />
        </View>
        <Text className={`text-gray-100 text-sm mt-4 px-8 text-center font-pregular mb-8`}>Where creativity meets innovation: embark on a journey of limitless exploration with Aora</Text>
        <PrimaryButton text={`Continue with Email`} navigate={()=>{props.navigation.navigate('SignIn')}}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default OAuth