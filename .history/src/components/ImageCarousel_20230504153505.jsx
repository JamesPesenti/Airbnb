import { Image, View, Text, StyleSheet, Dimensions } from "react-native"
import { useState } from "react"
import Carousel from "react-native-snap-carousel"
import designPost from "../../assets/data/designPost"

const width = Dimensions.get("window").width

const styles = StyleSheet.create({
   postImage: {
      width: "100%",
      aspectRatio: 1.2 / 1,
      // width: 320,
      height: 250, 
      resizeMode: "cover", 
      borderRadius: 10
  },
   detailsImage: {
      width: "100%", 
      aspectRatio: 3 / 2.3,
      alignItems: "center", 
      justifyContent: "flex-start",
      resizeMode: "cover", 
      borderRadius: 0
  },
})

const PostImageCarousel = ({designPost}) => {

   const [activeIndex, setActiveIndex] = useState(0)

   const renderImage = ({item, index}) => (
      <Image 
         source={{ uri: item }}
         style={styles.postImage}
      />
   )

   return (
      <>
         <Carousel 
            data={designPost.images}
            renderItem={renderImage}
            sliderWidth={200}
            itemWidth={300}
            onSnapToItem={(index) => setActiveIndex(index)}
         />
      </>
   )
}

const DetailsImageCarousel = ({designPost}) => {

   const [activeIndex, setActiveIndex] = useState(0)

   const renderImage = ({item, index}) => (
      <Image 
         source={{ uri: item }}
         style={styles.detailsImage}
      />
   )

   return (
      <>
         <Carousel 
            data={designPost.images}
            renderItem={renderImage}
            sliderWidth={500}
            itemWidth={300}
            onSnapToItem={(index) => setActiveIndex(index)}
         />
      </>
   )
}

export {PostImageCarousel, DetailsImageCarousel}

