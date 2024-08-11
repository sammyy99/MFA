import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const PrimaryButton = ({text, navigate}) => {
    return (
        <TouchableOpacity className={`bg-secondary-100 h-14 rounded-lg justify-center items-center w-[82%]`}
        onPress={navigate}
        >
            <Text className={`font-psemibold`}>{text}</Text>
        </TouchableOpacity>
    )
}

export default PrimaryButton