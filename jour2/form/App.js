import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TextInput, Alert } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  console.log(text)
  console.log(password)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput style={styles.input}
        placeholder={" email"}
        onChangeText={text => setText(text)}
        value={text}
        autoCompleteType={"email"}
        textContentType={"emailAddress"}
        keyboardType={"email-address"}
      />
      <TextInput style={styles.input}
        placeholder={" password"}
        onChangeText={password => setPassword(password)}
        value={password}
        secureTextEntry={true}
        autoCompleteType={"password"}
        textContentType={"password"}
        small={"your password should contain minimum of 6 alphanumeric characters"}
      />
      <Pressable
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.5 : 1,
            backgroundColor: pressed ? "red" : "orange",
            width: 250,
          },
          styles.button,
          ,
        ]}
        onPress={() => {password.length < 6 && Alert.alert('your password should contain minimum of 6 alphanumeric characters')}}
      >
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 16,
    fontSize: 42,
    color: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "rgb(35, 43, 56)",
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    padding: 8,
    textAlign: 'center'
  },
  input: {
    backgroundColor: "rgb(67, 81, 105)",
    height: 32,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    width: 250,
  }
});
