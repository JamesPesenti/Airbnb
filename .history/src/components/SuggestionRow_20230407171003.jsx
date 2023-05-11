import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo"


const SuggestionRow = ({ item }) => (
   <>
      <View style={styles.row}>
         <View style={styles.iconContainer}>
            <Entypo name={"location-pin"} size={30}  />
         </View>
         <Text style={styles.locationText}>{item.location}</Text>
      </View>
   </>
)

export default SuggestionRow

const styles = StyleSheet.create({
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
})