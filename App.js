import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
      <Text style={{fontSize: 80, fontWeight: 'bold', color: 'red', }}>Stoker</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('Pick Music')}
      />
    </View>
  );
}

function PickMusic({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>PickMusic</Text>
      <Button
        title="forward"
        onPress={() => navigation.navigate('Pick Picture')}
      />
    </View>
  );
}

function PickPicture({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>PickPicture</Text>
      <Button
        title="forward"
        onPress={() => navigation.navigate('Add Text')}
      />
    </View>
  );
}

function AddText({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>AddText</Text>
      <Button
        title="forward"
        onPress={() => navigation.navigate('Final Result')}
      />
    </View>
  );
}

function FinalResult({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>FinalResult</Text>
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Pick Music" component={PickMusic} />
        <Stack.Screen name="Pick Picture" component={PickPicture} />
        <Stack.Screen name="Add Text" component={AddText} />
        <Stack.Screen name="Final Result" component={FinalResult} />
      </Stack.Navigator>
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
