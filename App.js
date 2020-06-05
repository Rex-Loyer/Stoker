import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, ImageBackground} from 'react-native';
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
      <Text style={{fontSize: 80, fontWeight: 'bold', color: 'red', padding: 10, }}>Stoker</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('Discription')}
      />
    </View>
  );
}

function Discription({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
      <Text style={{fontSize: 20, color: 'red', }}>Stoker is an app that helps you visualize your goals to inspire action. Input your goal, pick your favorite background, and pick your music of choice. Focus using your ears and eyes. GET STOKED! </Text>
      <Button
        title="gotcha!"
        onPress={() => navigation.navigate('Set Goal')}
      />
    </View>
  );
}

function SetGoal({navigation}) {

  const [value, onChangeText] = React.useState('Your Goal Here');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        style={{ height: 100, width: 300, borderColor: 'black', borderWidth: 5, padding: 10}}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <Button
        title="done"
        onPress={() => {navigation.navigate('Pick Picture', {goal: value})}}
      />
    </View>
  );
}

function PickPicture({route, navigation}) {
  const {goal} = route.params;
  const [items, setItems] = React.useState([
    { name: 'https://picsum.photos/id/1040/800/800.jpg', code: '#1abc9c' },
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
          <View onStartShouldSetResponder={() => {navigation.navigate('Pick Music', {backgroundPicURL: item.name, goal: goal}) }}>
          <Image
            style={[styles.itemContainer]}
            resizeMode='cover'
            source={{uri: `${item.name}`}}
          />
        </View>
      )}
    />
  );
}

function PickMusic({route, navigation}) {
  const {backgroundPicURL} = route.params;
  const {goal} = route.params;
  const [items, setItems] = React.useState([
    { name: 'PATRIOTIC', code: '#1abc9c' },
    { name: 'STOCK MARKET', code: '#2ecc71' },
    { name: 'LAUGHING KIDS', code: '#3498db' },
    { name: 'GUTAIR', code: '#9b59b6' },
    { name: 'CASINO', code: '#34495e' },
    { name: 'EXCITED MURMURING', code: '#16a085' },
    { name: 'APPLAUSE', code: '#27ae60' },
    { name: 'WAVES', code: '#2980b9' },
    { name: 'CITY TRAFFIC', code: '#8e44ad' },
    { name: 'PARTY', code: '#2c3e50' },
    { name: 'TREES RUSTLING', code: '#f1c40f' },
    { name: 'HAPPY LAUGHTER', code: '#e67e22' },
    { name: 'INDAIN MUSIC', code: '#e74c3c' },
    { name: 'FRENCH MUSIC', code: '#ecf0f1' },
    { name: 'RUSSIAN MUSIC', code: '#95a5a6' },
    { name: 'CHINEESE MUSIC', code: '#f39c12' },
    { name: 'CHANTING', code: '#d35400' },
    { name: 'JUBULIANT EXCLAMATIONS', code: '#c0392b' },
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
        <View
          onStartShouldSetResponder={() => navigation.navigate('Final Result', {"backgroundPic": backgroundPicURL, "goal": goal})}
          style={[styles.itemContainer, { backgroundColor: item.code }]}
        >
          <Text style={styles.itemName}>{item.name}</Text>

        </View>
      )}
    />
  );
}

function FinalResult({route, navigation}) {
  console.log(route.params);
  const {backgroundPic} = route.params;
  const {goal} = route.params;

  return (
    // <View style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}}>
    //   <Text style={{fontSize: 100, fontWeight: 'bold', color: 'black', }}>{goal}</Text>
    //   <ImageBackground
    //     style={{height: 700, width: 700, position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}}
    //     source={{uri: `${backgroundPic}`}}
    //   />

      <ImageBackground source={{uri: `${backgroundPic}`}} style={{width: '100%', height: '100%'}}>
   <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center',}}>
      <Text style= {{fontSize: 35, color: 'white'}}>{goal}</Text>
   </View>
</ImageBackground>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Discription" component={Discription} />
        <Stack.Screen name="Pick Music" component={PickMusic} />
        <Stack.Screen name="Pick Picture" component={PickPicture} />
        <Stack.Screen name="Set Goal" component={SetGoal} />
        <Stack.Screen name="Final Result" component={FinalResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;