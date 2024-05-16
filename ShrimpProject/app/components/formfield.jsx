import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
const FormField = ({title, value, placeholder, handleChangeText, otherStyles, ...props}) => {
    const [showPassword, setShowPassword] = useState(false)

  return (
    <View style={[styles.container, otherStyles]}>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.inputBox}>
        <TextInput 
            style={styles.inputText}
            value={value}
            placeholder={placeholder}
            onChangeText={handleChangeText}
            secureTextEntry={title === 'Password' && !showPassword}
        />
        {title === 'Password' && (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <MaterialCommunityIcons name={showPassword? 'eye-off' : 'eye'} size={24} color='grey' style={styles.eyeCon}/>
        </TouchableOpacity>
      )}
      </View>
      
    </View>
  )
}

export default FormField

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#161630',
        justifyContent: 'space-evenly',
    },
    text:{
        color: 'white',
        fontSize: 20,
        fontWeight:'300',
        textAlign: 'left',
    },
    inputBox:{
        height:50,
        borderWidth:2,
        width:'100%',
        borderColor:'lightgray',
        backgroundColor: 'white',
        borderRadius: 10,
        fontSize: 20,
        fontWeight:'100',
        paddingLeft:5,
        flexDirection:'row',
    },
    inputText:{
        flex:1,
        width:'100%',
        height:'100%',
        color:'#161630',
        fontWeight:'200',
        fontSize: 20,
        textAlignVertical:'center',


    },
    eyeCon: {
        resizeMode:'contain',
        paddingTop:10,
    }
})