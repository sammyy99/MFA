import { View, Text, StatusBar, Image, Platform, TextInput, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../../constants/images';
import icons from '../../constants/icons'
import PrimaryButton from '../customComponents/PrimaryButton';

const SignIn = (props) => {

  const [formData, setFormData] = useState({
    USERNAME: '',
    USERPWD: ''
  })
  const [isSecureText, setIsSecureText] = useState(true);

  const handleOnchange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <SafeAreaView className={`flex-1 bg-primary`}>
      <StatusBar />
      <KeyboardAvoidingView
        behavior={`${Platform.OS === 'ios' ? 'padding' : 'height'}`}
        className={`flex-1`}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View className={`flex-1 mt-12 mx-6 mb-4 ${Platform.OS === 'ios' ? '' : 'py-4'}`} >
            <Image className={`w-24`} resizeMode='contain' source={images.logo} />
            <Text className={`text-white text-xl font-psemibold`}>Sign In</Text>

            <View className='mt-5'>
            <Text className={`text-gray-300`}>Username</Text>
            <TextInput className={`bg-black-100 text-white font-psemibold rounded-lg h-14 px-4 focus:border border-secondary-200 mt-2`}
              placeholder='Enter your username'
              placeholderTextColor={'#6b7280'}
              value={formData.USERNAME}
              onChangeText={(text) => { handleOnchange('USERNAME', text) }}
            />
            </View>
            
            <View className='mt-5'>
            <Text className={`text-gray-300 font-pregular`}>Password</Text>
            <View className={`bg-black-100 rounded-lg h-14 px-2 focus:border border-secondary-200 mt-2 flex-row justify-between items-center`}>
              <TextInput className={`flex-1 px-2 font-psemibold text-white`}
                placeholder='Enter your password'
                placeholderTextColor={'#6b7280'}
                value={formData.USERPWD}
                onChangeText={(text) => { handleOnchange('USERPWD', text) }}
                secureTextEntry={isSecureText}
              />
              <TouchableOpacity onPress={() => { setIsSecureText(!isSecureText) }}>
                {isSecureText ?
                  (<Image className={`w-10 h-8`} resizeMode='contain' source={icons.eye} />) :
                  (<Image className={`w-10 h-8`} resizeMode='contain' source={icons.eyeHide} />)}
              </TouchableOpacity>
            </View>
            </View>

            <TouchableOpacity className={`my-5`}><Text className={`text-gray-400 text-right font-pregular`}>Forgot pasword</Text></TouchableOpacity>

            <PrimaryButton text={'Sign In'} navigate={() => { props.navigation.navigate('TabNavigator') }} />

            <View className={`flex-row justify-center items-center mt-5`}>
              <Text className={`font-pregular text-gray-400`}>Don't have an account? </Text>
              <TouchableOpacity onPress={() => { props.navigation.navigate('SignUp') }}>
                <Text className={`text-secondary-200 font-pregular`}>Signup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SignIn