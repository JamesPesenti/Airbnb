import { Image, View, Text, StyleSheet, Dimensions } from "react-native"
import { useState, useRef } from "react"
import Carousel, { Pagination } from "react-native-snap-carousel"
import designPost from "../../assets/data/designPost"
import hawaiiPost from "../../assets/data/hawaiiPost"

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
      width: width, 
      aspectRatio: 3 / 2.3,
      alignItems: "center", 
      justifyContent: "flex-start",
      resizeMode: "cover", 
      borderRadius: 0
  },
})

const PostImageCarousel = ({designPost}) => {

   const isCarousel = useRef(null)

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
            sliderWidth={300}
            itemWidth={300}
            onSnapToItem={(index) => setActiveIndex(index)}
         />
          <Pagination
         //    dotsLength={designPost.length}
         //    activeDotIndex={activeIndex}
         //    carouselRef={isCarousel}
         //    dotStyle={{
         //       width: 50,
         //       height: 50,
         //       borderRadius: 5,
         //       marginHorizontal: 8,
         //       backgroundColor: '#F4BB41',
         //    }}
         //    tappableDots={true}
         //    inactiveDotStyle={{
         //       backgroundColor: 'black',
         //       // Define styles for inactive dots here
         //    }}
         //    inactiveDotOpacity={0.4}
         //    inactiveDotScale={0.6}
         //  />
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
            ref={isCarousel}
            data={designPost.images}
            renderItem={renderImage}
            sliderWidth={360}
            itemWidth={360}
            onSnapToItem={(index) => setActiveIndex(index)}
         />
         <Pagination
            dotsLength={designPost.length}
            activeDotIndex={activeIndex}
            carouselRef={isCarousel}
            dotStyle={{
               width: 50,
               height: 50,
               borderRadius: 5,
               marginHorizontal: 8,
               backgroundColor: '#F4BB41',
            }}
            tappableDots={true}
            inactiveDotStyle={{
               backgroundColor: 'black',
               // Define styles for inactive dots here
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
      </>
   )
}

const HawaiiPostImageCarousel = ({hawaiiPost}) => {

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
            data={hawaiiPost.images}
            renderItem={renderImage}
            sliderWidth={360}
            itemWidth={360}
            onSnapToItem={(index) => setActiveIndex(index)}
         />
         <Pagination
            dotsLength={designPost.length}
            activeDotIndex={activeIndex}
            carouselRef={isCarousel}
            dotStyle={{
               width: 50,
               height: 50,
               borderRadius: 5,
               marginHorizontal: 8,
               backgroundColor: '#F4BB41',
            }}
            tappableDots={true}
            inactiveDotStyle={{
               backgroundColor: 'black',
               // Define styles for inactive dots here
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
      </>
   )
}

const HawaiiDetailsImageCarousel = ({hawaiiPost}) => {

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
            data={hawaiiPost.images}
            renderItem={renderImage}
            sliderWidth={360}
            itemWidth={360}
            onSnapToItem={(index) => setActiveIndex(index)}
         />
      </>
   )
}

export {PostImageCarousel, DetailsImageCarousel, HawaiiPostImageCarousel, HawaiiDetailsImageCarousel }

