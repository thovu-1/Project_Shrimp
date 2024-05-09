import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {MyButton} from '../components/mybutton'
const MyTanks = () => {

    function handlePress(){

    }
  return (
    <View style={styles.main_container}>
        <View style={styles.container}>
            <Text>MyTanks</Text>

        </View>

        <View style={[styles.button] }>
            <MyButton title="Add Tank" onPress={handlePress}/>
        </View>
    </View>
  )
}

export default MyTanks

const styles = StyleSheet.create({
    main_container:{
      flex:1,
      margin:8
    },
    container:{
      flex:1,
      padding:8
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
  })