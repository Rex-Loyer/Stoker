

function HomeScreen({ navigation }) {
  return (
    <Button
      title="This goes to profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
  );
}

export default HomeScreen;