import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import OAuth from './component/auth/OAuth';
import SignIn from './component/auth/SignIn';
import SignUp from './component/auth/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='OAuth' component={OAuth} options={{headerShown:false}}/>
            <Stack.Screen name='SignIn' component={SignIn} options={{headerShown:true}}/>
            <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:true}}/>
          </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;