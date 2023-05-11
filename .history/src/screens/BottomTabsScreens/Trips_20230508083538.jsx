import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import designPost from "../../../assets/data/designPost"

const Trips = () => {
  return (
    <>
     {/* <ScrollView style={{backgroundColor: "white"}}> */}
      <View style={styles.container}>
        <Text style={styles.trips}>Trips</Text>
        <Text style={styles.upcoming}>Upcoming reservations</Text>
        <View style={styles.reservationCard}>
          <Image source={{ uri: designPost.image}} style={{width: 100, height: 100,}} />
          <View style={styles.line} />
        </View>
      </View>
      {/* </ScrollView> */}
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 2.5
  },
  line: {
    opacity: .4,
    borderWidth: .3,
    borderColor: "grey",
    paddingHorizontal: 160,
    marginVertical: 0
  },
})