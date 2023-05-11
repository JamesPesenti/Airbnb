import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Inbox = () => {
  return (
    <View style={styles.container}>
      <Text>Inbox Screen</Text>
    </View>
  )
}

export default Inbox

const styles = StyleSheet.create({
  container: {
    margin: 20,
    textAlign: "center"
  }
})