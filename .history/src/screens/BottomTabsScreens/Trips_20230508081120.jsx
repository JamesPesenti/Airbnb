import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Trips = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.trips}>Trips</Text>
      <Text style={styles.upcoming}>Upcoming reservations</Text>
      <View style={styles.reservationCard}>

      </View>
    </View>
  )
}

export default Trips

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 20,
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