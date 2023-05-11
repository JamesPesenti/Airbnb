import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Trips = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.trips}>Trips</Text>
    </View>
  )
}

export default Trips

const styles = StyleSheet.create({
  container: {
    margin: 40,
    textAlign: "left"
  },
  trips: {
    fontWeight: "bold",
    fontSize: 25,
  },
})