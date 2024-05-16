import { StatusBar } from 'expo-status-bar';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Link, router} from 'expo-router';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import  MyButton  from './components/mybutton';
import 'react-native-gesture-handler';
const HomePage= () => {
    const [isPressed, setIsPressed] = useState(false);

    const buttonStyles = [styles.myButton, isPressed ? styles.pressedButton: null]
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View style={styles.container}>
          <Text style={{color:'green', fontSize:24, bottom:50}}>Welcome to the shrimp shop</Text>
        <View style={{top:150}}>
          <Link href="/sign-in" style={styles.myButton}>Continue To The Shop</Link>
        </View>
        <StatusBar style="light"  backgroundColor='#161630'/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomePage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161630',
    alignItems: 'center',
    justifyContent: 'center',
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
