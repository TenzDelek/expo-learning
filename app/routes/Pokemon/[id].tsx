import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const Detail = () => {
    const { id } = useLocalSearchParams()
    return (
        <View>
            <Text>Detail : {id}</Text>
        </View>
    )
}

export default Detail