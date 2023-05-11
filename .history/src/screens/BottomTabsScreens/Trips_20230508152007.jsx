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
          <View style={{width: "100%", height: "50%", overflow: "hidden"}}>
            <Image 
              style={{flex: 1, borderTopLeftRadius: 20, borderTopRightRadius: 20}}
              source={{ uri: "https://www.territorysupply.com/wp-content/uploads/2020/10/dome-in-the-desert-joshua-tree-airbnb.jpg"}} 
            />
          </View>
          {/* Location and Host info */}
            <Text style={styles.place}>Joshua Tree</Text>
            <Text style={styles.host}>Entire dome hosted by Alex and Bailey</Text>
          <View style={styles.line} />
          {/* Trip date flex d column */}
          <View style={{flexDirection: "row"}}>
           <View style={{flexDirection: 'column', marginRight: 15}}>
              <Text style={styles.month}>July</Text>
              <Text style={styles.date}>1-15</Text>
              <Text style={styles.year}>2023</Text>
           </View>
           {/* Trip Address */}
            <View style={{marginLeft: 40}}>
            <View style={styles.verticalLine} />
                <Text style={styles.address}>25 Desert Ave.</Text>
                <Text style={styles.city}>Joshua Tree, CA</Text>
                <Text style={styles.country}>United States</Text>
            </View>
           </View>
          <View style={styles.line} />
          {/* Check in info */}
          {/* <Text style={styles.checkin}>Your check in details: Getting there, getting inside, and wifi.</Text> */}
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
  reservationCard: {
    marginTop: 20,
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "white",
    height: "65%",
    width: "80%",
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
  verticalLine: {
    right: 45,
    opacity: .4,
    borderWidth: 0,
    borderLeftWidth: 1,
    borderColor: "grey",
    paddingHorizontal: 0,
    paddingVertical: 25,
    marginVertical: 0,
    marginHorizontal: 10
  },
  place: {
    marginTop: 5,
    marginLeft: 15,
    fontWeight: "600",
    fontSize: 20,
    letterSpacing: 1
  },
  host: {
    marginLeft: 15,
    fontWeight: "600",
    fontSize: 12,
  },
  month: {
    marginTop: 0,
    marginLeft: 15,
    fontWeight: "600",
    fontSize: 15,
  },
  date: {
    marginLeft: 15,
    fontWeight: "600",
    fontSize: 15,
  },
  year: {
    marginLeft: 15,
    fontWeight: "600",
    fontSize: 15,
  },
  address: {
    marginLeft: 15,
    fontWeight: "600",
    fontSize: 12,
  },
  city: {
    marginLeft: 15,
    fontWeight: "600",
    fontSize: 12,
  },
  country: {},
  checkin: {}
})