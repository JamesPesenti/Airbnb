import { View, Text, Pressable, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"


const BackButton = () => {

  const navigation = useNavigation()

   return(
     <>
      <View style={{top: 40, left: 10, padding: 7, backgroundColor: "white", borderRadius: 100,}}>
       <Pressable onPress={() => navigation.goBack()}>
         <Image 
           source={{ uri: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-back-512.png" }}
           style={{width: 22, height: 22, right: 1}}
         />
       </Pressable>
      </View>
     </>
   )
}

const HeartButton = () => {

  const navigation = useNavigation()
  
  return(
    <>
     <View style={{top: 6, left: 300, padding: 8, backgroundColor: "white", borderRadius: 100,}}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image 
          source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/002/590/686/small/casino-poker-heart-figure-line-style-icon-free-vector.jpg" }}
          style={{width: 20, height: 20}}
        />
      </Pressable>
     </View>
    </>
  )
}

export {BackButton, HeartButton}