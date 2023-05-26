import { useState } from "react"
import { ScrollView, StyleSheet, Pressable, Text, View, Image } from 'react-native'

const ResultCard = ({ result }) => {

const [results, setResults] = useState("")
 
 // When property results render
  const onGoBack = () => {
   setResults("")
 }
 

  return (
    <>

      
             <View style={{marginBottom: 50}}>
               <Pressable
                  onPress={onGoBack}
               >
                  <Text style={styles.goBack}>Go Back</Text>
               </Pressable>
             </View>
            {/* <View style={styles.line} /> */}
     
      
    </>
  )
}

export default ResultCard

const styles = StyleSheet.create({
   reservationCard: {
      padding: 20,
      marginTop: 30,
      marginBottom: 40,
      justifyContent: "center",
      alignSelf: "center",
      backgroundColor: "white",
      height: "100%",
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
    daysContainer: {
      position: "absolute",
      backgroundColor: "white",
      padding: 4,
      margin: 10,
      borderRadius: 5,
    },
    days: {
      marginHorizontal: 5,
      fontSize: 12,
      fontWeight: "700"
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
      opacity: .2,
      borderWidth: 0,
      borderLeftWidth: 1,
      borderColor: "grey",
      paddingHorizontal: 0,
      paddingVertical: 30,
      marginVertical: 0,
    },
    place: {
      marginTop: 10,
      marginLeft: 15,
      fontWeight: "600",
      fontSize: 20,
      letterSpacing: 1
    },
    host: {
      marginTop: 5,
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
    checkinImage: {
      resizeMode: "contain",
      justifyContent: "center",
      alignSelf: "center",
      marginVertical: 15, 
      top: 50,
      padding: 28, 
      borderRadius: 50
    },
    checkin: {
      fontSize: 12,
      paddingHorizontal: 30,
      marginVertical: 2, 
    },
    goBack: {
      textAlign: "center",
      alignItems: "center",
    },
})