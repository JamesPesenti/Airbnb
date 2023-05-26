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
        onChangeText={onChangeEmail}
        placeholder="Email"
        value={email}
      />
      <TextInput 
        onChangeText={onChangePassword}
        placeholder="Password"
        value={password}
      />
      <Pressable
        style={{marginTop: 10, width: 50, height: 30, backgroundColor: "transparent", borderWidth: 1, borderRadius: 5}}
        onPress={onPress}
      >
        <Text style={{justifyContent: "center", textAlign: "center", alignItems: "center"}}>Enter</Text>
      </Pressable>
    </View>
  )1
}

export default Inbox

const styles = StyleSheet.create({
  container: {
    margin: 50,
    justifyContent: "center",
    alignItems: "center",
  }
})