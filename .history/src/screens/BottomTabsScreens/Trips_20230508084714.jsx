import { Dimensions, ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import designPost from "../../../assets/data/designPost"

const width = Dimensions.get("window").width

const Trips = () => {
  return (
    <>
     {/* <ScrollView style={{backgroundColor: "white"}}> */}
      <View style={styles.container}>
        <Text style={styles.trips}>Trips</Text>
        <Text style={styles.upcoming}>Upcoming reservations</Text>
        <View style={styles.reservationCard}>
          <Image 
            style={{width: width, height: 100,}}
            source={{ uri: "https://a0.muscache.com/im/pictures/monet/Luxury-670175052891237401/original/de056bb5-34ca-45ea-9b89-62a5696c9d8d?im_w=720"}} 
          />
          <Text>Joshua Tree</Text>
          <Text>Entire dome hosted by Kathrin and Brian</Text>
          <View style={styles.line} />
          <View>
            <Text>July 1-15 2023</Text>
            <Text>25 Desert Ave. Joshua Tree, CA</Text>
            <Text>United State</Text>
          </View>
          <View style={styles.line} />
          <Text>Your check in details: Getting there, getting inside, and wifi.</Text>
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
    width: "65%",
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
    paddingHorizontal: 10,
    marginVertical: 10
  },
})