import React, { useEffect, useState } from 'react';

import { StyleSheet, Text, View, Dimensions, LogBox } from 'react-native';

import MapView, { Callout, Marker } from 'react-native-maps';

import { useDispatch, useSelector } from 'react-redux';

import { storeLocation, getLocation } from '../../config/location';
import { logger } from "react-native-logs";

var log = logger.createLogger();

const Carte = ({navigation}) => {
  console.log('test1');
    const dispatch = useDispatch();
    console.log('test2');
    const Geoloc = useSelector(state => state.location.value);
    console.log('test3');
    const [pin, setPin] = useState({ latitude: 48.866667, longitude: 2.333333 });
    const [pinsec, setPinsec] = useState({ latitude: 48.866767, longitude: 2.334333 });
    console.log('test4');
    useEffect(() => {
      setPin({ latitude: 48.866667, longitude: 2.333333 });
      setPinsec({ latitude: 48.866767, longitude: 2.334333 });

    }, [dispatch]);
    console.log('test5');

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 48.866667,
            longitude: 2.333333,
            latitudeDelta: 0.04,
            longitudeDelta: 0.05,
            }}
        >
          <Marker coordinate={pin} pinColor="black">
            <Callout>
              <Text>I'm here</Text>
            </Callout>
          </Marker>
          <Marker coordinate={pinsec} pinColor="black">
          <Callout>
              <Text>I'm here</Text>
            </Callout>
          </Marker>
        </MapView>
      </View>
    );
  };
  
  console.log('Test6');
  // Pour la réalisation de cette partie, je n'ai pas eu le temps de faire un styled components,
  // j'ai demandé aux autres qui ont oublié de le faire malheureusement. Delphine
  const styles = StyleSheet.create({
    conainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });
  
  console.log('Test7');
export default Carte;