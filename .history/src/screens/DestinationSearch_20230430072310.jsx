import { StyleSheet, Text, TextInput, FlatList, View, Image, Pressable } from 'react-native'
import { useState } from "react"
import searchResults from "../../assets/data/searchResults"
import Entypo from "react-native-vector-icons/Entypo"
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { SearchBackButton } from "../components/UI/UIButtons"

const DestinationSearch = () => {

  return (
   <>
     <View style={{marginTop: 20}}>
      <SearchBackButton  />
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
      </View>

     
   </>
  )
}

export default DestinationSearch

const styles = StyleSheet.create({
   container: {
      margin: 20,
      marginTop: 50,
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