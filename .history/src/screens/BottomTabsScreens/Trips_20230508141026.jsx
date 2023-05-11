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
          <View style={{width: "100%", height: "50%"}}>
            <Image 
              style={{flex: 1, borderTopLeftRadius: 20, borderTopRightRadius: 20}}
              source={{ uri: "https://www.territorysupply.com/wp-content/uploads/2020/10/dome-in-the-desert-joshua-tree-airbnb.jpg"}} 
            />
          </View>
          <Text style={styles.place}>Joshua Tree</Text>
          <Text style={styles.host}>Entire dome hosted by Kathrin and Brian</Text>
          <View style={styles.line} />
          <View>
            <Text style={styles.date}>July 1-15 2023</Text>
            <Text style={styles.address}>25 Desert Ave. Joshua Tree, CA</Text>
            <Text style={styles.country}>United State</Text>
          </View>
          <View style={styles.line} />
          <Text style={styles.checkin}>Your check in details: Getting there, getting inside, and wifi.</Text>
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
    marginTop: 30,
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
    paddingHorizontal: 10,
    marginVertical: 10
  },
  place: {
    marginTop: 10,
    marginLeft: 10,
    fontWeight: "600",
    fontSize: 25,
    letterSpacing: 1
  },
  host: {
    marginTop: 10,
    marginLeft: 10,
    fontWeight: "600",
    fontSize: 25,
    letterSpacing: 1
  },
  date: {
    marginTop: 10,
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 25,
    letterSpacing: 1
  },
  address: {},
  country: {},
  checkin: {}
})