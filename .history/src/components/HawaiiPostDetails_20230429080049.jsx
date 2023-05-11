import { Pressable, StyleSheet, Image, Text, View, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { BackButton, HeartButton } from "../components/UI/UIButtons"

const HawaiiPostDetails = ({ hawaiiPost }) => {

 return (
    <>
      <ScrollView>
       <View style={styles.container}>
            <Image
              source={{ uri: hawaiiPost.image}}
              style={styles.image}
            />
            <View style={{position: "absolute"}}>
              <BackButton />
              <HeartButton />
            </View>
       </View>

       {/* Property Details */}
       <View style={styles.detailsContainer}>
            <Text style={styles.location}>{hawaiiPost.location}</Text>
            <Text style={styles.text}>{hawaiiPost.detailTitle}</Text>
       </View>
       <View style={styles.line} />

       {/* Host Details */}
       <View style={styles.hostContainer}>
            <Text style={styles.host}>{hawaiiPost.host}</Text>
            <Image 
              source={{ uri: post.hostImage}}
              style={{width: 60, height: 60, borderRadius: 50, marginTop: 10, marginRight: 30}}
            />
       </View>
          <Text style={styles.text}>{hawaiiPost.propertyDetails}</Text>
          <View style={styles.line} />
            <Text style={styles.description}>
               {hawaiiPost.description}
            </Text>
      </ScrollView>
    </>

  )
}

export default HawaiiPostDetails

const styles = StyleSheet.create({
   container: {
      margin: 0,
      marginTop: 0,
      marginBottom: 40
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
  onImage: {
    top: 0,
    alignSelf: "center",
    position: "absolute",
    height: 30,
    width: 30
  },
  detailsContainer: {
    alignItems: "flex-start",
    marginLeft: 10
  },
  hostContainer: {
    alignItems: "flex-start",
    marginLeft: 10,
    flexDirection: "row",
  },
  host: {
    flex: 1,
    fontSize: 18,
    fontWeight: "700",
    marginTop: 10,
},
  location: {
      fontSize: 22,
      fontWeight: "700",
      marginTop: 0,
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
    fontSize: 16,
    lineHeight: 24
  },
})