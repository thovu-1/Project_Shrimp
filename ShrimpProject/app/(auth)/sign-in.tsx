import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../components/formfield'
import MyButton from '../components/mybutton'
import { Link } from 'expo-router'

const SignIn = () => {
    const [form, setForm] = React.useState({
        email:'',
        password:''
    })
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const submit = () => {

    }
  return (
    <SafeAreaView >
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.login_text}>
                    Log in to your account
                </Text>

                <FormField 
                      title="Email"
                      value={form.email}
                      handleChangeText={(text: string) => setForm({ ...form, email: text })}
                      keyboardType="email-address" placeholder={undefined} otherStyles={undefined}                />

                <FormField 
                      title="Password"
                      value={form.password}
                      handleChangeText={(text: string) => setForm({ ...form, password: text })} placeholder={undefined} otherStyles={undefined}                />

                <MyButton 
                      title="Sign In"
                      handlePress={submit}
                      isLoading={isSubmitting} 
                      containerStyles={undefined}
                      textStyles={undefined}                />

                <View style={{justifyContent:'center', flexDirection:'row', gap:2, padding:20}}>
                    <Text style={{fontSize:18, color:'lightgrey'}}>Don't have an account?</Text>
                    <Link href='sign-up' style={{fontSize:18, color:'orange', paddingLeft:5, fontWeight:'semibold'}}>Sign Up</Link>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161630',
        alignItems: 'center',
        justifyContent: 'center',
        height:'100%', 
      },
      btn:{
        padding:200,
      },
      login_text:{
        fontSize:35, 
        color:'white',
        fontWeight:'semibold',
        padding:20,
        textAlign:'left'
      }
})