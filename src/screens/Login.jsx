import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import { Link } from '@react-navigation/native';
export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigation()

  const handleLogin = () => {
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };
  return (
    <View style={styles.container}>
      <Title style={styles.title}>Login</Title>
      <TextInput
      mode="outlined"
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
       mode="outlined"
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Login
      </Button>
     <Link to={{ screen: 'signup'}}>
      <Button  style={styles.signupButton}>
        Don't have an account? Sign Up
      </Button>
     </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    marginBottom: 16,
  },
  button: {
    width: '100%',
    marginTop: 16,
  },
  signupButton: {
    marginTop: 20,
  },
});
