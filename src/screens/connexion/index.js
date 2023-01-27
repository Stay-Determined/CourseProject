import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import React, {useContext, useState} from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {BASE_URL} from './config';

const Connexion = ({navigation}) => {
  const [user, setUser] = useState('');

  const submitLogin = text => {
    text.preventDefault();
    console.log(user);

    axios({
      method: 'POST',
      url: 'https://runningapiynov.azurewebsites.net/api/Users',
      data: {
        user,
      },
    })
      .then(async res => {
        console.log(res);
        await AsyncStorage.setItem('token', res.headers['x-access-token']);
        navigation.navigate('MainPage');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          // label="Email"
          name="email"
          id="email"
          // type="text"
          onChangeText={text => setUser({...user, email: text})}
        />

        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          // label="Mot de passe"
          name="mdp"
          id="mdp"
          // type="password"
          onChangeText={text => setUser({...user, mdp: text})}
          secureTextEntry
        />

        <Button title="Se connecter" onPress={e => submitLogin(e)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '80%',
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
  },
});

export default Connexion;
