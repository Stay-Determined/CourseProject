import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MainPage from '../screens/mainPage';
import Connexion from '../screens/connexion';
import Deconnexion from '../screens/deconnexion';
import Carte from '../screens/carte';
<<<<<<< Updated upstream
import QrGen from '../screens/questions';
=======
import QrGen from '../screens/scanner';
import Scanner from '../screens/qrScanner';
import Question from '../screens/questions';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
=======

        <Stack.Screen
          name="QrScan"
          component={Scanner}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Question"
          component={Question}
          options={{headerShown: false}}
        />

>>>>>>> Stashed changes
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
