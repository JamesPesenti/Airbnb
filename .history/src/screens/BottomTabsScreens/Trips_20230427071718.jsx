import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Trips = () => {
  return (
    <View style={styles.container}>
      <Text>Trips Screen</Text>
    </View>
  )
}

export default Trips

const styles = StyleSheet.create({
  container: {
    margin: 50,
    alignItems: "center"
  }
})