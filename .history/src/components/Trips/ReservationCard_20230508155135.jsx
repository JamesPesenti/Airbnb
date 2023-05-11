import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ReservationCard = () => {
  return (
    <>
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
           <View style={{flexDirection: 'column', marginRight: 20}}>
              <Text style={styles.month}>July</Text>
              <Text style={styles.date}>1 - 15</Text>
              <Text style={styles.year}>2023</Text>
           </View>
           {/* Trip Address */}
           <View style={styles.verticalLine} />
            <View style={{marginLeft: 30, marginTop: 0}}>
                <Text style={styles.address}>25 Desert Ave.</Text>
                <Text style={styles.city}>Joshua Tree, CA</Text>
                <Text style={styles.country}>United States</Text>
            </View>
           </View>
          <View style={styles.line} />
          {/* Check in info */}
        <View style={{flexDirection: "row"}}>
          <Image 
              style={{marginVertical: 15, left: 15, bottom: 17, width: 40, height: 40, padding: 10, borderRadius: 100}} 
              source={{ uri: "https://images.contentstack.io/v3/assets/bltb428ce5d46f8efd8/bltc1cd16d484367ad6/6058dd2a0f19b910ce5f9fd5/Group_1_(1).png?crop=56.31p,100p,x21.75p,y0&width=650&height=650&auto=webp"}}
            />
          <Text style={styles.checkin}><Text style={{...styles.checkin, fontWeight: "700"}}>Your check in details: </Text>Getting there, getting inside, and wifi.</Text>
        </View>
        </View>
    </>
  )
}

export default ReservationCard

const styles = StyleSheet.create({
   reservationCard: {
      marginTop: 30,
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
      left: 8,
      opacity: .4,
      borderWidth: 0,
      borderLeftWidth: 1,
      borderColor: "grey",
      paddingHorizontal: 0,
      paddingVertical: 30,
      marginVertical: 0,
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
      fontSize: 12,
    },
    address: {
      marginRight: 25,
      fontWeight: "600",
      fontSize: 15,
    },
    city: {
      marginLeft: 0,
      fontWeight: "600",
      fontSize: 15,
    },
    country: {
      marginLeft: 0,
      fontWeight: "600",
      fontSize: 12,
    },
    checkin: {
      fontSize: 12,
      marginRight: 25,
      paddingHorizontal: 35,
      marginVertical: 2, 
    }
})