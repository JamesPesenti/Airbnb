import { Image, View, Text, StyleSheet } from "react-native"
import { useState } from "react"
import Carousel from "react-native-snap-carousel"
import designPost from "../../assets/data/designPost"


const Carousel = () => {

   const [activeIndex, setActiveIndex] = useState(0)

   const renderItem = ({item, index}) => (
      <Image 
         source={{ uri: item}}
         style={styles.image}
      />
   )

   return (
      <>
         <Carousel 
            data={designPost}

         />
      </>
   )
}

export default Carousel

const styles = StyleSheet.create({
   image: {
      width: "100%", 
      aspectRatio: 3 / 2.3,
      alignItems: "center", 
      justifyContent: "flex-start",
      resizeMode: "cover", 
      borderRadius: 0
  },
})