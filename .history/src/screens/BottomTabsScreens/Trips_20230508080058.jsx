import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Trips = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.trips}>Trips</Text>
      <Text>Upcoming reservations</Text>
    </View>
  )
}

export default Trips

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 20,
    textAlign: "left"
  },
  trips: {
    fontWeight: "600",
    fontSize: 25,
    letterSpacing: 1
  },
})