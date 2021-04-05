import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tab from './navigation/BottomTabNavigator';
import Room1 from './screens/Room1';
import Sala from './screens/Sala';
import Cochera from './screens/Cochera';
import Patio from './screens/Patio';
import Comedor from './screens/Comedor';
import ControlTv from './screens/ControlTv';
import Users from './screens/Usuarios';
import Registrar from './screens/Registrar';
import Living from './screens/Living';
import Editar from './screens/Editar';
import Eliminar from './screens/Eliminar';


import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import MusicApp from './app/index';

const Stack = createStackNavigator();
function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([require('./assets/fondo.jpg')]);

    await Promise.all([...imageAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="MusicApp"  >
            <Stack.Screen name="MusicApp" options={{ title: 'Smart Home' }} component={MusicApp} />
            <Stack.Screen name="Tab" options={{ title: 'Login Admin Server' }} component={Tab} />
            <Stack.Screen name="Room1" options={{ title: 'Access Room' }} component={Room1} />
            <Stack.Screen name="Sala" options={{ title: 'Living Room' }} component={Sala} />
            <Stack.Screen name="Comedor" options={{ title: 'Kitchen & Dining room' }} component={Comedor} />
            <Stack.Screen name="Cochera" options={{ title: 'Garage' }} component={Cochera} />
            <Stack.Screen name="Patio" options={{ title: 'Garden' }} component={Patio} />
            <Stack.Screen name="ControlTv" options={{ title: 'Control Tv' }} component={ControlTv} />
            <Stack.Screen name="Users" options={{ title: 'Add Finger' }} component={Users} />
            <Stack.Screen name="Registrar" options={{ title: 'Register User' }} component={Registrar} />
            <Stack.Screen name="Living" options={{ title: 'Living' }} component={Living} />
            <Stack.Screen name="Editar" options={{ title: 'Edit' }} component={Editar} />
            <Stack.Screen name="Eliminar" options={{ title: 'Delete' }} component={Eliminar} />

          </Stack.Navigator>
        </NavigationContainer>
      );
    }

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
