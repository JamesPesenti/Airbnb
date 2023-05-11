import { Pressable, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"

const MapButton = () => {

   const navigation = useNavigation()

  return (
    <>
     <View style={{position: 'absolute', bottom: 20, right: 145}}>
      <Pressable 
            style={{backgroundColor: "black", borderRadius: 50, width: 85, height: 43, padding: 12, left: 6, justifyContent: 'center', alignItems: 'center',}} 
            onPress={() => navigation.navigate("SearchResultsMap")}
         >
           <View style={{flexDirection: "row", alignItems: "center"}}>
               <Text style={{ marginHorizontal: 5, color: "white", fontWeight: "bold", textAlign: "center", alignItems: "center"}}>Map</Text>
               <Image 
                  source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlnFHTl4JFYCkc5_vgDwHLMAbg2-VjU55h9g&usqp=CAU"}}
                  style={{width: 15, height: 15}}
               />
           </View>
      </Pressable>
     </View>
    </>
  )
}

export default MapButton

const styles = StyleSheet.create({})




