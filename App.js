import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image,} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

  const styles = StyleSheet.create({
    gridView: {
      marginTop: 10,
      flex: 1,
    },
    itemContainer: {
      justifyContent: 'flex-end',
      borderRadius: 5,
      padding: 10,
      height: 150,
    },
    itemName: {
      fontSize: 16,
      color: '#fff',
      fontWeight: '600',
    },
    itemCode: {
      fontWeight: '600',
      fontSize: 12,
      color: '#fff',
    },
  });

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
      <Text style={{fontSize: 80, fontWeight: 'bold', color: 'red', }}>Stoker</Text>
      <Button
        title="Get Started"
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
        onPress={() => navigation.navigate('Pick Picture')}
      />
    </View>
  );
}

function PickPicture({navigation}) {
  const [items, setItems] = React.useState([
    { name: 'TURQUOISE', code: '#1abc9c' },
    { name: 'EMERALD', code: '#2ecc71' },
    { name: 'PETER RIVER', code: '#3498db' },
    { name: 'AMETHYST', code: '#9b59b6' },
    { name: 'WET ASPHALT', code: '#34495e' },
    { name: 'GREEN SEA', code: '#16a085' },
    { name: 'NEPHRITIS', code: '#27ae60' },
    { name: 'BELIZE HOLE', code: '#2980b9' },
    { name: 'WISTERIA', code: '#8e44ad' },
    { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
    { name: 'SUN FLOWER', code: '#f1c40f' },
    { name: 'CARROT', code: '#e67e22' },
    { name: 'ALIZARIN', code: '#e74c3c' },
    { name: 'CLOUDS', code: '#ecf0f1' },
    { name: 'CONCRETE', code: '#95a5a6' },
    { name: 'ORANGE', code: '#f39c12' },
    { name: 'PUMPKIN', code: '#d35400' },
    { name: 'POMEGRANATE', code: '#c0392b' },
    { name: 'SILVER', code: '#bdc3c7' },
    { name: 'ASBESTOS', code: '#7f8c8d' },
  ]);

  return (
    <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
          <View onStartShouldSetResponder={() => navigation.navigate('Pick Music')}>
          <Image
            style={[styles.itemContainer]}
            resizeMode='cover'
            source={{uri: 'https://picsum.photos/id/1040/200/200.jpg'}}
          />

        </View>
      )}
    />
  );
}

function PickMusic({navigation}) {
  const [items, setItems] = React.useState([
    { name: 'TURQUOISE', code: '#1abc9c' },
    { name: 'EMERALD', code: '#2ecc71' },
    { name: 'PETER RIVER', code: '#3498db' },
    { name: 'AMETHYST', code: '#9b59b6' },
    { name: 'WET ASPHALT', code: '#34495e' },
    { name: 'GREEN SEA', code: '#16a085' },
    { name: 'NEPHRITIS', code: '#27ae60' },
    { name: 'BELIZE HOLE', code: '#2980b9' },
    { name: 'WISTERIA', code: '#8e44ad' },
    { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
    { name: 'SUN FLOWER', code: '#f1c40f' },
    { name: 'CARROT', code: '#e67e22' },
    { name: 'ALIZARIN', code: '#e74c3c' },
    { name: 'CLOUDS', code: '#ecf0f1' },
    { name: 'CONCRETE', code: '#95a5a6' },
    { name: 'ORANGE', code: '#f39c12' },
    { name: 'PUMPKIN', code: '#d35400' },
    { name: 'POMEGRANATE', code: '#c0392b' },
    { name: 'SILVER', code: '#bdc3c7' },
    { name: 'ASBESTOS', code: '#7f8c8d' },
  ]);

  return (
    <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <View onStartShouldSetResponder={() => navigation.navigate('Final Result')} style={[styles.itemContainer, { backgroundColor: item.code }]}>
          <Text style={styles.itemName}>{item.name}</Text>
        </View>
      )}
    />
  );
}

function FinalResult({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>FinalResult</Text>
    </View>
  );
}


function App() {
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


export default App;