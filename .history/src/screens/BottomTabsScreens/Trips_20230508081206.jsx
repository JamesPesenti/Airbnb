import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Trips = () => {
  return (
    <View style={styles.container}>
      
    </View>
  )
}

export default Trips

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "left",
    backgroundColor: "white"
  },
  trips: {
    fontWeight: "600",
    fontSize: 25,
    letterSpacing: 1
  },
  upcoming: {
    marginTop: 50,
    fontWeight: "600",
    fontSize: 19,
    letterSpacing: 1
  },
  reservationCard: {
    backgroundColor: "white",
    paddingVertical: 150,
    margin: 15,
    borderRadius: 10,

  }
})