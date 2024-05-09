import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const TabsLayout = () => {

    return (
    <>
    <Tabs screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarStyle: {
            backgroundColor: 'white',
            borderTopWidth:1,
        }
    }}>
        <Tabs.Screen name="profile" 
        options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({color}) => <FontAwesome name="user-circle" size={24} color={color}/>
        }}/>

        <Tabs.Screen name="tanks" 
        options={{
            title: "Tanks",
            headerShown: false,
            tabBarIcon: ({color}) => <MaterialCommunityIcons name="fishbowl-outline" size={24} color={color}/>
        }}/>

        <Tabs.Screen name="guides" 
        options={{
            title: "Guides",
            headerShown: false,
            tabBarIcon: ({ color }) => <FontAwesome6 size={28} name="shrimp" color={color} />,
        
        }}/>
    </Tabs>
    </>
  )
}

export default TabsLayout