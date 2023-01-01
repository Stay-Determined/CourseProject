import React from 'react';
import {SafeAreaView, Dimensions} from 'react-native';
import Routes from './src/config/routes';
const App = () => {
  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: Dimensions.get('window').height,
      }}>
      <Routes />
    </SafeAreaView>
  );
};

export default App;
