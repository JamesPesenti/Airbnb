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
        style={{width: 120, height: 100 ,}}
        onPress={onPress}
      >
        <Text>Enter</Text>
      </Pressable>
    </View>
  )
}

export default Inbox

const styles = StyleSheet.create({
  container: {
    margin: 0,
    justifyContent: "center",
    alignItems: "center"
  }
})