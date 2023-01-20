import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MainPage from '../screens/mainPage';
import Connexion from '../screens/connexion';
import Deconnexion from '../screens/deconnexion';
import Carte from '../screens/carte';
import QrGen from '../screens/questions';

const Stack = createNativeStackNavigator();
const Routes = ({navigation}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Connexion">
        <Stack.Screen
          name="Connexion"
          component={Connexion}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainPage"
          component={MainPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Carte"
          component={Carte}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Deconnexion"
          component={Deconnexion}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="QrGen"
          component={QrGen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
