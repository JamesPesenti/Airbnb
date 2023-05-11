import { Pressable, Image, FlatList, Dimensions, StyleSheet, Text, View } from 'react-native'
import { useState, useEffect, useRef } from "react"
import MapView, { PROVIDER_GOOGLE }  from "react-native-maps"
import hawaiiPost from "../../assets/data/hawaiiPost"
import CustomMarker from "../components/CustomMarker"
import PostCarouselItem from '../components/PostCarouselItem'
import { BackButton } from "../components/UI/UIButtons"

const width = Dimensions.get("window").width

const SearchResultsMap = (props) => {

  const [selectedPlaceId, setSelectedPlaceId] = useState(null) 

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
      longitudeDelta: 2
   }
   map.current.animateToRegion(region)
  }, [selectedPlaceId])

  
  return (
   <View style={{flex: 1}}>
     <View style={{flex: 1, position: 'relative'}}>
       <MapView
         ref={map}
         style={{flex: 1}}
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
             key={place.id}
             price={place.price}
             coordinate={place.coordinate}
             isSelected={place.id === selectedPlaceId}
             onPress={() => setSelectedPlaceId(place.id)}
           />
         ))}
       </MapView>
       <View style={{position: "absolute", top: 10, left: 0, zIndex: 1}}>
         <BackButton />
       </View>
     </View>
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
             <View style={{marginHorizontal: 5}}>
               <PostCarouselItem post={item}/>
             </View>
           )
         }}
       />
     </View>
   </View>
 );
 
  
}

export default SearchResultsMap

const styles = StyleSheet.create({})