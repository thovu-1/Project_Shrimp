import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Link, router} from 'expo-router';
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import  MyButton  from './components/mybutton';
import 'react-native-gesture-handler';
export default function App() {
    const [isPressed, setIsPressed] = useState(false);

    const buttonStyles = [styles.myButton, isPressed ? styles.pressedButton: null]
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={{color:'green'}}>Welcome to the shrimp shop</Text>
      <View style={{top:150}}>
  
          {/* <MyButton title="Enter App" onPress={handle} isPressed={isPressed}/> */}
          <Link href="/(tabs)/tanks" style={styles.myButton}>Press me to enter</Link>
      </View>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
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
