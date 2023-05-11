import { Dimensions, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import designPost from "../../../assets/data/designPost"
import ReservationCard from "../../components/Trips/ReservationCard"
import reservations from "../../../assets/data/reservations"

const { width, height } = Dimensions.get("window")

const Trips = () => {
  
  return (
    <>
     <ScrollView>
      <View style={styles.container}>
        <Text style={styles.trips}>Trips</Text>
        <Text style={styles.upcoming}>Upcoming reservations</Text>
        {/* Reservation Card */}
        <View style={styles.reservationCardContainer}>
          {reservations.map((reservations) => (
            <ReservationCard reservations={reservations}/>
          ))}
        </View>
      </View>
     </ScrollView>
    </>
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
    marginTop: 30,
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 25,
    letterSpacing: 1
  },
  upcoming: {
    marginTop: 20,
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 19,
    letterSpacing: 1
  },
  reservationCardContainer: {
    height: height,
    marginBottom: height
  }
})