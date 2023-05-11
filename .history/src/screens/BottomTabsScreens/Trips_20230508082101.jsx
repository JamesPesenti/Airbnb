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
    textAlign: "left",
    backgroundColor: "white"
  },
  trips: {
    marginTop: 60,
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 25,
    letterSpacing: 1
  },
  upcoming: {
    marginTop: 40,
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 19,
    letterSpacing: 1
  },
  reservationCard: {
    marginTop: 20,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "white",
    height: "55%",
    width: "85%",
    borderRadius: 10,

  }
})