import { StyleSheet, Text, View, Input } from 'react-native'
import { useState } from 'react'

const Inbox = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  return (
    <View style={styles.container}>
      <Text>Inbox Screen</Text>
      <Input 
        text={setPassword}
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