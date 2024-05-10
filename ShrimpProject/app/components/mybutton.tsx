import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { Component, useState } from 'react'

type ButtonProps = {
  onPress: () => void;
  title: string;
  isPressed: boolean
}

const MyButton = (props: ButtonProps) => {
  const buttonStyles = [styles.myButton, props.isPressed ? styles.pressedButton: null]
  return (
    <View>
      <TouchableOpacity onPress={()=>{props.onPress}} style={buttonStyles}>
          <Text style={styles.appButtonText}>{props.title}</Text>
      </TouchableOpacity>
    </View>
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
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'green',
    },
    pressedButton: {
      backgroundColor: 'darkgreen',
    },
  });