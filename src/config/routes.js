import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MainPage from '../screens/mainPage';
import Connexion from '../screens/connexion';
import Deconnexion from '../screens/deconnexion';
import Carte from '../screens/carte';

const Stack = createNativeStackNavigator();
const Routes = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Connexion">
        <Stack.Screen name="Connexion" component={Connexion} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="Carte" component={Carte} />
        <Stack.Screen name="Deconnexion" component={Deconnexion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
