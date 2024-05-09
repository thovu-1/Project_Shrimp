import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface MyButton {
  onPress: Function;
  title: string;
}
export function MyButton(props: MyButton){
  return (
    <TouchableOpacity onPress={()=>{props.onPress}} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}>{props.title}</Text>
    </TouchableOpacity>
  )
}



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
  });