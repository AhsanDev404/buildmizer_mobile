import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Avatar, Button } from 'react-native-paper';

export default function Profile() {
  // Dummy user data
  const user = {
    name: 'John Doe',
    // Replace with the path to your user's profile image
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log('Logout button pressed');
  };

  return (
    <View style={styles.container}>
      <Avatar.Image size={150} />
      <Text style={styles.name}>{user.name}</Text>
      {/* Add other important user information here */}

      <Button mode="contained" onPress={handleLogout} style={styles.logoutButton}>
        Logout
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    marginVertical: 20,
  },
  logoutButton: {
    marginTop: 20,
  },
});
