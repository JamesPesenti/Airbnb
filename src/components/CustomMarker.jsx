import { StyleSheet, Text, View } from 'react-native'
import { Marker }  from "react-native-maps"

const CustomMarker = (props) => {
  const { coordinate, price, onPress, isSelected } = props
  return (
    <>
      <Marker 
         coordinate={coordinate}
         onPress={onPress}
      >
         <View style={{...styles.container, backgroundColor: isSelected ? "black" : "white"}}>
            <Text style={{...styles.price,  color: isSelected ? "white" : "black"}}>
               ${price}
            </Text>
         </View>
      </Marker>
    </>
  )
}

export default CustomMarker

const styles = StyleSheet.create({
   container: {
      justifyContent: "center", 
      padding: 5,
      backgroundColor: "white", 
      borderRadius: 20,
      borderColor: "grey",
      borderWidth: 1,
   },
   price: {
      fontSize: 12, 
      fontWeight: "bold", 
      color: "black", 
      justifyContent: "center", 
    
   }
})