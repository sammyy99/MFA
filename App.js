import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className={`bg-red-500 flex-1 justify-center items-center`}>
        <Text className="text-3xl">Basic app</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;