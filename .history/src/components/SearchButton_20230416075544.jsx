import { Pressable, Image, TextInput, StyleSheet, Text, View } from 'react-native'
import Fontisto from "react-native-vector-icons/Fontisto"
import { useNavigation } from "@react-navigation/native"


const SearchButton = () => {

  const navigation = useNavigation()

  return (
    <>
      <Pressable 
        style={styles.whereToButton}
        onPress={() => navigation.navigate("Destination Search")}
      >
         <View style={{justifyContent: "center", marginRight: 25}}>
          <Fontisto name="search" size={18} color={"gray"} />
         </View>
         <View style={{flexDirection: "column"}}>
            <Text style={styles.whereToText}>Where to?</Text>
            <Text style={styles.anywhereText}>Anywhere &#8226; Any week &#8226; 2 guests</Text>
         </View>
         <View style={{justifyContent: "center", marginLeft: 10}}>
          <Image 
            style={{ width: 20, height: 20}}
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO1qOcAG41DkMtM_Zk63fkT_knMlzWWzKf5A&usqp=CAU" }}  
          />
         </View>
      </Pressable>
    </>
  )
}

export default SearchButton

const styles = StyleSheet.create({
   whereToButton: {
      flexDirection: "row",
      justifyContent: "center",
      textAlign: "center",
      top: 10,
      position: "absolute",
      zIndex: 1,
      elevation: 2.5,
      width: "85%",
      paddingVertical: 10,
      backgroundColor: "white",
      borderRadius: 60,
  },
  whereToText: {
      fontWeight: "600",
      letterSpacing: .5,
      fontSize: 15,
      marginVertical: -3,
      marginRight: 15,
  },
  anywhereText: {
    color: "lightgrey",
    fontSize: 12,
  }
})