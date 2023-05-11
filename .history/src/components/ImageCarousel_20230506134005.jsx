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
  paginationContainer: {
    position: "absolute",
    top: 200,
    left: 0,
    right: 0,
    zIndex: 1,
    alignSelf: "center",
    justifyContent: "center",
  }
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
         <View style={styles.paginationContainer}>
            <Pagination
               dotsLength={designPost.images.length}
               activeDotIndex={activeIndex}
               carouselRef={isCarousel}
               dotStyle={{
                  width: 8,
                  height: 8,
                  borderRadius: 5,
                  marginHorizontal: -10,
                  backgroundColor: 'white',
               }}
               tappableDots={true}
               inactiveDotStyle={{
                  backgroundColor: 'grey',
                  width: 10,
                  height: 10,
                  borderRadius: 5,
               }}
               inactiveDotOpacity={0.5}
               inactiveDotScale={0.6}
            />
        </View>
      </>
   )
}

const DetailsImageCarousel = ({designPost}) => {

   const isCarousel = useRef(null)

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
               sliderWidth={370}
               itemWidth={370}
               onSnapToItem={(index) => setActiveIndex(index)}
            />
         <View style={styles.paginationContainer}>
            <Pagination
               dotsLength={designPost.images.length}
               activeDotIndex={activeIndex}
               carouselRef={isCarousel}
               dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: -10,
                  backgroundColor: 'white',
               }}
               tappableDots={true}
               inactiveDotStyle={{
                  backgroundColor: 'grey',
                  // Define styles for inactive dots here
               }}
               inactiveDotOpacity={0.5}
               inactiveDotScale={0.6}
            />
        </View>
      </>
   )
}

const HawaiiPostImageCarousel = ({hawaiiPost}) => {

   const [activeIndex, setActiveIndex] = useState(0)

   const isCarousel = useRef(null)

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
            dotsLength={hawaiiPost.length}
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

   const isCarousel = useRef(null)

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
            dotsLength={hawaiiPost.length}
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

export {PostImageCarousel, DetailsImageCarousel, HawaiiPostImageCarousel, HawaiiDetailsImageCarousel }

