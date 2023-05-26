import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native'
import { useState } from 'react'
import { useNavigation } from "@react-navigation/native"

const Inbox = () => {

  const [email, onChangeEmail] = useState("")
  const [password, onChangePassword] = useState("")

  const navigation = useNavigation()

  const onPress = () => {
    navigation.navigate("Home")
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.email}
        value={email}
        placeholder="Email"
        onChangeText={onChangeEmail}
        placeholderTextColor={"#aeb0af"}
      />
      <TextInput 
        style={styles.password}
        value={password}
        secureTextEntry={true}
        placeholder="Password"
        onChangeText={onChangePassword}
        placeholderTextColor={"#aeb0af"}
      />
      <Pressable
        style={styles.enterButton}
        onPress={onPress}
      >
        <Text style={styles.login}>Login</Text>
      </Pressable>
    </View>
  )
}

export default Inbox


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 500,
    backgroundColor: "white",
    margin: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    elevation: 3.3
  },
  email: {
    height: 38,
    width: 100,
    backgroundColor: "white",
    borderBottomColor: "#f15454",
    borderBottomWidth: 1,
    marginVertical: 5
  },
  password: {
    height: 40,
    width: 100,
    backgroundColor: "white"
  },
  enterButton: {
    marginTop: 10, 
    width: 50, 
    height: 30, 
    backgroundColor: "white", 
    borderWidth: 1, 
    borderRadius: 5
  },
  login: {
    fontSize: 15, 
    justifyContent: "center", 
    textAlign: "center", 
    alignItems: "center"
  }
})