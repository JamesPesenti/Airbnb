import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import "react-native-gesture-handler"
import RootNavigator from './src/navigation/RootNavigator';


export default function App() {
  return (
    <>
    <View style={styles.container}>
      <StatusBar style="auto"/>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
