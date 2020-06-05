import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  const [outputText, setOutpputText] = useState('Open up App.js to start working on your app!');
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>{outputText}</Text>
        <Button title="Change Text" onPress={() => setOutpputText('The Text Changed!')}/>
      </View>
    </NavigationContainer>
  );
}

//createStackNativiagtor
//create grid, putt pictures 100%

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
