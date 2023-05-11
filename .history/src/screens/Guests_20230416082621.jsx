import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import { useNavigation } from "@react-navigation/native"
import Fontisto from "react-native-vector-icons/Fontisto"


const Guests = () => {

  const [quantity, setQuantity] = useState(0)
  const [adults, setAdults] = useState(0)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)

  const navigation = useNavigation()

  return (
   <>
    <View style={{marginTop: 50}}>

      {/* Adults */}
      <View style={styles.row}>
         <View>
            <Text style={styles.adults}>Adults</Text>
            <Text style={styles.ages}>Ages 13 or above</Text>
         </View>
      {/* Buttons */}
         <View style={styles.buttonsContainer}>
            <Pressable
               style={styles.buttons}
               onPress={() => setAdults(Math.max( 0, adults - 1))}
            >
               <Text style={{fontSize: 18, textAlign: "center"}}>-</Text>
            </Pressable>
               <Text style={{marginHorizontal: 15, fontSize: 16}}>{adults}</Text>
            <Pressable
               style={styles.buttons}
               onPress={() => setAdults(Math.max( 0, adults + 1))}
            >
               <Text style={{fontSize: 18, textAlign: "center"}}>+</Text>
            </Pressable>
         </View>
      </View>

      {/* Children */}
      <View style={styles.row}>
         <View>
            <Text style={styles.adults}>Children</Text>
            <Text style={styles.ages}>Ages 2-12</Text>
         </View>
      {/* Buttons */}
         <View style={styles.buttonsContainer}>
            <Pressable
               style={styles.buttons}
               onPress={() => setChildren(Math.max( 0, children - 1))}
            >
               <Text style={{fontSize: 18, textAlign: "center"}}>-</Text>
            </Pressable>
               <Text style={{marginHorizontal: 15, fontSize: 16}}>{children}</Text>
            <Pressable
               style={styles.buttons}
               onPress={() => setChildren(Math.max( 0, children + 1))}
            >
               <Text style={{fontSize: 18, textAlign: "center"}}>+</Text>
            </Pressable>
         </View>
      </View>

      {/* Infants */}
      <View style={styles.row}>
         <View>
            <Text style={styles.adults}>Infants</Text>
            <Text style={styles.ages}>Ages 2 and under</Text>
         </View>
      {/* Buttons */}
         <View style={styles.buttonsContainer}>
            <Pressable
               style={styles.buttons}
               onPress={() => setInfants(Math.max( 0, infants - 1))}
            >
               <Text style={{fontSize: 18, textAlign: "center"}}>-</Text>
            </Pressable>
               <Text style={{marginHorizontal: 15, fontSize: 16}}>{infants}</Text>
            <Pressable
               style={styles.buttons}
               onPress={() => setInfants(Math.max( 0, infants + 1))}
            >
               <Text style={{fontSize: 18, textAlign: "center"}}>+</Text>
            </Pressable>
         </View>
      </View>

      {/* Pets */}
      <View style={styles.row}>
         <View>
            <Text style={styles.adults}>Pets</Text>
            <Text style={styles.ages}>Bringing a service animal?</Text>
         </View>
      {/* Buttons */}
         <View style={styles.buttonsContainer}>
            <Pressable
               style={styles.buttons}
               onPress={() => setInfants(Math.max( 0, infants - 1))}
            >
               <Text style={{fontSize: 18, textAlign: "center"}}>-</Text>
            </Pressable>
               <Text style={{marginHorizontal: 15, fontSize: 16}}>{infants}</Text>
            <Pressable
               style={styles.buttons}
               onPress={() => setInfants(Math.max( 0, infants + 1))}
            >
               <Text style={{fontSize: 18, textAlign: "center"}}>+</Text>
            </Pressable>
         </View>
      </View>
      {/* Search Button */}
      <View style={styles.searchContainer}>
            <Pressable
               onPress={() =>
                navigation.navigate("SearchResults")}
               style={{justifyContent: "center", alignItems: "center", textAlign: "center", flexDirection: "row", backgroundColor: "#f15454", borderWidth: 1, borderColor: "lightgrey", borderRadius: 30, width: 80, height: 35, padding: 5}}
            >
             <View style={{justifyContent: "center", marginRight: 3}}>
               <Fontisto name="search" size={16} color={"white"} />
             </View>
               <Text style={{color: "white", justifyContent: "center", alignItems: "center", textAlign: "center"}}>Search</Text>
            </Pressable>
         </View>
       </View>
   </>
  )
}

export default Guests

const styles = StyleSheet.create({
   row: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 20,
      marginHorizontal: 20,
      alignItems: "center",
      borderBottomWidth: 1,
      borderColor: "lightgrey"
   },
   adults: {
      fontWeight: "bold",
   },
   ages: {
      color: "#8d8d8d"
   },
   buttonsContainer: {
      flexDirection: "row"
   },
   buttons: {
      padding: 0,
      marginHorizontal: 3,
      width: 28,
      height: 28,
      borderRadius: 15,
      borderWidth: 1,
      borderColor: "#c7c5c5"
   },
   searchContainer: {
      marginTop: 30, 
      justifyContent: "center", 
      alignItems: "center", 
      textAlign: "center"
   },

})