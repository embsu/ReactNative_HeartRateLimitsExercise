import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [age, setAge] = useState(0);
  const [heartRateLimit, setHeartRateLimit] = useState('');

  function calculateMaxHeartRate() {
    if (age) { // jos ikä annettu niin laske
    const resultLower = parseInt((220 - age) * 0.65);
    const resultUpper = parseInt((220 - age) * 0.85);
    setHeartRateLimit(resultLower + ' - ' + resultUpper);
  } else {
    setHeartRateLimit('Please enter your age');
  }
}

  return (
    <View style={styles.container}>
      <Text style={styles.otsikko}>Heart rate limits doing sports</Text>
      <Text>Age</Text>
      {/* alla, aina kun inputin teksti muuttuu, se päivittää tilan "age". */}
      <TextInput 
      placeholder='Enter your age'
      style={styles.field} 
      value={age} 
      onChangeText={text => setAge(text)} 
      keyboardType='decimal-pad'></TextInput>

      <StatusBar style="auto" />
      <Text>Limits</Text>
      <Text style={styles.field}>{heartRateLimit}</Text>
      {/* <Button style={styles.button} onPress={calculateMaxHeartRate} title='Calculate'> </Button> */}

      <TouchableOpacity onPress={calculateMaxHeartRate} style={styles.button}>
        <Text style={{ color: '#fff' }}>Calculate</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D7E2F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  otsikko: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  field: {
  width: 200,
  borderColor: '#616F71',
  borderWidth: 1,
  padding: 10,
  marginBottom: 10,
  borderRadius: 5,
}, 
button: {
  backgroundColor: '#FE4164',
  padding: 10,
  borderRadius: 5,
  borderColor: '#D7E2F3',
  width: 200,
  alignItems: 'center',  
},
});
