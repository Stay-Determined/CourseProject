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
  // const [user, setUser] = useState('');
  const [email, setUsername] = React.useState('');
  const [mdp, setPassword] = React.useState('');

  const submitLogin = text => {
    text.preventDefault();

    // VERIFICATION DANS LA CONSOLE //
    console.log('Email inséré: ' + email);
    console.log('Mot de passe inséré: ' + mdp);
    // VERIFICATION DANS LA CONSOLE //

    axios
      .get(
        `https://runningapiynov.azurewebsites.net/api/Users/login?email=${email}&mdp=${mdp}`,
      )
      .then(function (response) {
        navigation.navigate('MainPage');
      })
      .catch(function (error) {
        alert('Mot de passe ou email érroné !');
      })
      .then(function () {});
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
          // onChangeText={text => setUser({...user, email: text})}
          onChangeText={setUsername}
          value={email}
        />

        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          // label="Mot de passe"
          name="mdp"
          id="mdp"
          // type="password"
          // onChangeText={text => setUser({...user, mdp: text})}
          onChangeText={setPassword}
          value={mdp}
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
