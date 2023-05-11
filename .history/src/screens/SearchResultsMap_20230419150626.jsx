import { Pressable, Image, FlatList, Dimensions, StyleSheet, Text, View } from 'react-native'
import { useState, useEffect, useRef } from "react"
import MapView, { PROVIDER_GOOGLE }  from "react-native-maps"
import hawaiiPost from "../../assets/data/hawaiiPost"
import CustomMarker from "../components/CustomMarker"
import PostCarouselItem from '../components/PostCarouselItem'
import { useNavigation } from "@react-navigation/native"

const width = Dimensions.get("window").width

const SearchResultsMap = (props) => {

  const [selectedPlaceId, setSelectedPlaceId] = useState(null) 

  const navigation = useNavigation()

  const flatlist = useRef()
  const map = useRef()

// For on the fly bug
  const viewConfig = useRef({itemVisiblePercentThreshold: 100})
// change the carousel's active state based on place selected 
  const onViewChanged = useRef(({viewableItems}) => {
   if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item
      setSelectedPlaceId(selectedPlace.id)
   }
  })


  useEffect(() => {
   if (!selectedPlaceId || !flatlist) {
      return
   }
   const index = hawaiiPost.findIndex(place => place.id === selectedPlaceId)
   flatlist.current.scrollToIndex({index})

   const selectedPlace = hawaiiPost[index]
   const region = {
      latitude: selectedPlace.coordinate.latitude,
      longitude: selectedPlace.coordinate.longitude,
      latitudeDelta: 1,
      longitudeDelta: 1
   }
   map.current.animateToRegion(region)
  }, [selectedPlaceId])

  const backButton = () => {
   return (
      <>
         <View style={{marginTop: 0, left: 10, padding: 10, backgroundColor: "transparent", borderRadius: 100,}}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image 
              source={{ uri: "https://icons.veryicon.com/png/o/miscellaneous/integrated-icon-library-of-middle-and/left-arrow-back.png" }}
              style={{width: 15, height: 15, right: 0}}
            />
          </Pressable>
         </View>
      </>
   )
  }

  return (
    <>
    
         {backButton()}
     
      <View>
         <MapView
            ref={map}
            style={{width: "100%", height: "100%"}}
            provider={PROVIDER_GOOGLE}
            pointerEvents="none"
            region={{
               latitude: 28.345785627200847,
               longitude: -16.511484916124832,
               latitudeDelta: 0.015,
               longitudeDelta: 0.0121,
            }}
         >
            {hawaiiPost.map(place => (
               <CustomMarker 
                  price={place.price}
                  coordinate={place.coordinate}
                  isSelected={place.id === selectedPlaceId}
                  onPress={() => setSelectedPlaceId(place.id)}
               />
            ))}
            
         </MapView>
         <View style={{position: "absolute", bottom: 0}}>
         {/* Place Carousel */}
            <FlatList 
               ref={flatlist}
               data={hawaiiPost}
               horizontal
               snapToInterval={width - 60}
               snapToAlignment={"center"}
               decelerationRate={"fast"}
               itemVisiblePercentThreshold={50}
               showHorizontalScrollIndicator={false}
               viewabilityConfig={viewConfig.current}
               onViewableItemsChanged={onViewChanged.current}
               renderItem={({item}) => {
                  return (
                     <>
                        <View key={item.id} style={{marginHorizontal: 5}}>
                           <PostCarouselItem post={item}/>
                        </View>
                     </>
                  )
               }}
            />
         </View>
      </View>
    </>
  )
}

export default SearchResultsMap

const styles = StyleSheet.create({})