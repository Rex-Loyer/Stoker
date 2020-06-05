function Profile({ navigation }) {
  return (
    <Button
      title="this navigates to the Homepage"
      onPress={() =>
        navigation.navigate('Home', { name: 'Jane' })
      }
    />
  );
}

export default Profile;