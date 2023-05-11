import { StyleSheet, Text, TextInput, FlatList, View, Image, Pressable } from 'react-native'
import { useState } from "react"
import searchResults from "../../assets/data/searchResults"
import Entypo from "react-native-vector-icons/Entypo"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { BackButton } from "../components/UI/UIButtons"

const DestinationSearch = () => {

  return (
   <>
     <View style={{marginTop: 40}}>
      <BackButton style={{marginHorizontal: 10}} />
     </View>

      <View style={styles.container}>
        <View style={{height: 200}}>
         <Text style={styles.chooseTitle}>Choose your destination</Text>
         <GooglePlacesAutocomplete
               styles={styles.textInput}
               placeholder='Where to?'
               onPress={(data, details = null) => {
               // 'details' is provided when fetchDetails = true
               console.log(data, details);
               navigation.navigate("Guests")
               }}
               query={{
                  key: 'AIzaSyAfWqrOFbqmFIqnM57FuEyBeNyEDAN76J0',
                  language: 'en',
               }}
            />
        </View>
         {/* <FlatList 
            data={searchResults}
            renderItem={({ item }) => (
               <>
                 <Pressable
                  onPress={() => navigation.navigate("Guests")}
                 >
                  <View style={styles.row}>
                     <View style={styles.iconContainer}>
                        <Entypo name={"location-pin"} size={30}  />
                     </View>
                     <Text style={styles.locationText}>{item.location}</Text>
                  </View>
                 </Pressable>
               </>
            )}
         /> */}
      </View>
   </>
  )
}

export default DestinationSearch

const styles = StyleSheet.create({
   container: {
      margin: 20,
      marginTop: 20,
   },
   chooseTitle: {
      fontSize: 20,
      letterSpacing: 1,
      textAlign: 'center',
      marginBottom: 20
   },
   textInput: {
      justifyContent: "center",
      textAlign: "center",
      marginTop: 50,
      marginBottom: 20,
      fontSize: 18
   },
   row: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 15,
      borderBottomWidth: 1,
      borderColor: "lightgrey"
   },
   iconContainer: {
      backgroundColor: "#f2f0f0",
      borderRadius: 8,
      padding: 7,
      marginRight: 10,
   },
   locationText: {

   }
})