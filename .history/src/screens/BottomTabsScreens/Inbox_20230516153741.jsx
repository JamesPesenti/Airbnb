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
        value={email}
        placeholder="Email"
        onChangeText={onChangeEmail}
        placeholderTextColor={"#aeb0af"}
      />
      <TextInput 
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
        <Text style={{justifyContent: "center", textAlign: "center", alignItems: "center"}}>Enter</Text>
      </Pressable>
    </View>
  )
}

export default Inbox

const styles = StyleSheet.create({
  container: {
    margin: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red"
  },
  enterButton: {
    marginTop: 10, 
    width: 50, 
    height: 30, 
    backgroundColor: "transparent", 
    borderWidth: 1, 
    borderRadius: 5
  }
})