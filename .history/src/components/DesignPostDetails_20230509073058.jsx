import { Pressable, StyleSheet, Image, Text, View, ScrollView, ImageBackground } from 'react-native'
import { useEffect, useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { BackButton, HeartButton } from "./UI/UIButtons"
import { DetailsImageCarousel } from "../components/ImageCarousel"

const DesignPostDetails = ({ designPost }) => {

  const navigation = useNavigation()

 return (
    <>
      <ScrollView>
       <View style={styles.container}>
            <DetailsImageCarousel designPost={designPost} />
              <View style={{position: "absolute"}}>
                <BackButton />
                <HeartButton />
              </View>
       {/* Property Details */}
       <View style={styles.detailsContainer}>
            <Text style={styles.location}>{designPost.location}</Text>
            <Text style={styles.text}>{designPost.detailTitle}</Text>
       </View>
        <View style={styles.line} />
       {/* Host Details */}
       <View style={styles.hostContainer}>
            <Text style={styles.host}>{designPost.host}</Text>
            <Image 
              source={{ uri: designPost.hostImage}}
              style={{width: 50, height: 50, borderRadius: 50, marginTop: 10, marginLeft: 13}}
            />
       </View>
          <Text style={styles.text}>{designPost.propertyDetails}</Text>
          <View style={styles.line} />
            <Text style={styles.description}>
               {designPost.description}
            </Text>
        </View>
      </ScrollView>
      {/* Footer price and reserve button */}
          <View style={styles.line} />
           <View style={styles.reserveButtonContainer}>
            <View style={{flexDirection: "row"}}>
                <View style={{flexDirection: "column"}}>
                  <Text>${designPost.price} night</Text>
                  <Text>{designPost.dates}</Text>
                </View>
              {/*Reserve Button*/}
              <Pressable
                  style={{width: 90, backgroundColor: "#f15454", borderRadius: 5, padding: 13, margin: 10, marginTop: "auto", marginLeft: "auto"}}
                  onPress={() => navigation.navigate("Guests")}
              >
                <Text style={{color: "white", textAlign: "center"}}>Reserve</Text>
              </Pressable>
            </View>
          </View>
    </>
  )
}

export default DesignPostDetails

const styles = StyleSheet.create({
   container: {
      height: 800,
      marginBottom: 100
  },
  image: {
      width: "100%", 
      aspectRatio: 3 / 2.3,
      // top: 0,
      // alignSelf: "center",
      // position: "absolute",
      alignItems: "center", 
      justifyContent: "flex-start",
      resizeMode: "cover", 
      borderRadius: 0
  },
  detailsContainer: {
    alignItems: "flex-start",
    marginLeft: 10,
  },
  hostContainer: {
    alignItems: "flex-start",
    marginLeft: 10,
    flexDirection: "row",
  },
  host: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 10,
},
  location: {
      padding: 20,
      fontSize: 22,
      fontWeight: "700",
  },
  text: {
      fontWeight: "400",
      fontSize: 14,
      color: "#aeb0af",
      marginVertical: 5,
      marginLeft: 10
  },
  line: {
    // marginVertical: 10,
    opacity: .4,
    borderWidth: .3,
    borderColor: "grey",
    paddingHorizontal: 160,
    marginVertical: 10
  },
  description: {
    marginVertical: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    lineHeight: 24
  },
  reserveButtonContainer: {
    position: "absolute",
    bottom: 7,
    left: 0,
    right: 0,
    backgroundColor: "white",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: "lightgray"
  },
})