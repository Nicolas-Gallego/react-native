import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Pressable, Alert, ActivityIndicator } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.text}>
        <Text style={[styles.sentences, styles.high]}>La police, ne t'a pas encore trouvé?</Text>
        <Text style={[styles.sentences, styles.center]}>Mon fils est un gangster au sang-froid et j'ai besoin d'un câlin.</Text>
        <Text style={[styles.sentences, styles.bold]}>Le réalité et toi, vous ne vous entendez pas, n'est-ce pas?</Text>
      </View>
      <Image source={{ uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png" }} style={{ width: 400, height: 100 }}></Image>
      <Image source={require("./images/konexio-logo_1.png")}
        style={{ width: 400, height: 100 }}></Image>
      <Pressable onPress={() => Alert.alert('Ive been pressed')}><Text>Press me</Text></Pressable>
      <ActivityIndicator size="large" color="#00ff00"></ActivityIndicator>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
  },
  text: {
    backgroundColor: 'white',
    margin: 32,
  },
  sentences: {
    marginTop: 80,
    marginBottom: 80,
  },
  high: {
    fontSize: 30,
  },
  center: {
    textAlign: 'center',
  },
  bold: {
    fontWeight: "bold",
  },
});
