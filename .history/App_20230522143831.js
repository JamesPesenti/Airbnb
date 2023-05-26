import { View } from "react-native"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import "react-native-gesture-handler"
import RootNavigator from './src/navigation/RootNavigator';


export default function App() {
  return (
    <>
      <StatusBar style="auto"/>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
