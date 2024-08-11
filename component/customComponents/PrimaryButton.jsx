import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const PrimaryButton = ({text, navigate, isLoading}) => {
    return (
        <TouchableOpacity className={`bg-secondary-100 h-14 rounded-lg justify-center items-center w-full ${isLoading?'opacity-50':''}`}
        onPress={navigate}
        disabled={isLoading}
        >
            <Text className={`font-pbold`}>{text}</Text>
        </TouchableOpacity>
    )
}

export default PrimaryButton