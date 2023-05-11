import { Pressable, StyleSheet, Image, Text, View, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"
import { BackButton, HeartButton } from "./UI/UIButtons"


const DesignPostDetails = ({ designPost }) => {

 return (
    <>
      <ScrollView>
       <View style={styles.container}>
            <Image
              source={{ uri: designPost.image}}
              style={styles.image}
            />
            <View style={{position: "absolute"}}>
              <BackButton />
              <HeartButton />
            </View>
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
        <View>
          <View style={{flexDirection: "row"}}>
            <Text>${designPost.price} night</Text>
            <Pressable
              style={{backgroundColor: "red", flex: 1, marginTop: "auto"}}
              onPress={() => {}}
            >
              <Text>Reserve</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </>

  )
}

export default DesignPostDetails

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
    paddingHorizontal: 20,
    fontSize: 16,
    lineHeight: 24
  },
})