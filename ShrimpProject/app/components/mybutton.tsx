import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component, useState } from 'react'


const MyButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {

  return (

    <TouchableOpacity onPress={handlePress} activeOpacity={0.7}  style={[styles.myButton, isLoading ? {opacity:0.5}: {}]} disabled={isLoading}>
        <Text style={[styles.appButtonText, textStyles ? textStyles:'']}>{title}</Text>
    </TouchableOpacity>

  )
}


export default MyButton
const styles = StyleSheet.create({
    appButtonContainer: {
      backgroundColor: "green",
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
    },
    appButtonText: {
      color: "#ffffff",
      fontSize: 16,
      fontWeight: "bold",
    },
    myButton: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 16,
      paddingHorizontal: 32,
      borderRadius: 10,
      elevation: 3,
      backgroundColor: 'orange',
    },
  });