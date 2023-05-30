import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, TouchableWithoutFeedback,  Keyboard} from 'react-native';

import LoginScreen from './src/screens/LoginScreen';
import PostsScreen from './src/screens/PostsScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import Home from './src/screens/Home';

import { useFonts } from 'expo-font';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import 'react-native-gesture-handler';

const MainStack = createStackNavigator();

export default function App() {
  const [ fontsLoaded ] = useFonts({
    'Roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
  })

  if(!fontsLoaded){
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName='LoginScreen'>
        <MainStack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }}/>
        <MainStack.Screen name="PostsScreen" component={PostsScreen} options={{ headerShown: false }}/>
        <MainStack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{ headerShown: false }}/>
        <MainStack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      </MainStack.Navigator>
    </NavigationContainer>
  );
}