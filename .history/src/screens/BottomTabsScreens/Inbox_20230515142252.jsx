import { StyleSheet, Text, View, TextInput } from 'react-native'
import { useState } from 'react'

const Inbox = () => {

  const [email, onChangeEmail] = useState("")
  const [password, onChangePassword] = useState("")

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
    </View>
  )
}

export default Inbox

const styles = StyleSheet.create({
  container: {
    margin: 50,
    alignItems: "center"
  }
})