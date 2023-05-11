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
           style={{width: 6, height: 6, right: 1}}
         />
       </Pressable>
      </View>
     </>
   )
}

export default BackButton