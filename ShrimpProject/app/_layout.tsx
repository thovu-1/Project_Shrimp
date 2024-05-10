import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
  return (
    <Stack screenOptions={{
      headerStyle:{
        backgroundColor:'green'
      }
    }}>
        <Stack.Screen name='index' options={{headerShown:true, headerTitle:""}}/>
        <Stack.Screen name='(tabs)' options={{headerShown:false}}/>
    </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})