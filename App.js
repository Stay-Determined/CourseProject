import React from 'react';
import {SafeAreaView, Dimensions} from 'react-native';
import Routes from './src/config/routes';
import {Provider} from 'react-redux';
import {store} from './src/config/store';
const App = () => {
  console.log('VAUDOU');

  return (
    <Provider store={store}>
    <SafeAreaView
      style={{
        width: '100%',
        height: Dimensions.get('window').height,
      }}>
      <Routes />
    </SafeAreaView>
    </Provider>

  );
};

export default App;