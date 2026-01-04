import { Tabs } from 'expo-router'
import React from 'react'

const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen name="Poke" options={{ title: 'Poke', headerShown: false }} />
            <Tabs.Screen name="index" options={{ title: 'Home', headerShown: false }} />
            <Tabs.Screen name="Setting" options={{ title: 'Setting', headerShown: false }} />
        </Tabs>
    )
}

export default _layout