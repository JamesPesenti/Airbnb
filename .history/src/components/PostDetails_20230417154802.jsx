import { Pressable, StyleSheet, Image, Text, View, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"

const PostDetails = ({ designPost }) => {

  const navigation = useNavigation()

  const backButton = () => {
      return(
        <>
         <View style={{top: 40, left: 10, padding: 10, backgroundColor: "white", borderRadius: 100,}}>
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

  const heartButton = () => {
    return(
      <>
       <View style={{top: 6, left: 300, padding: 8, backgroundColor: "white", borderRadius: 100,}}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image 
            source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/002/590/686/small/casino-poker-heart-figure-line-style-icon-free-vector.jpg" }}
            style={{width: 20, height: 20}}
          />
        </Pressable>
       </View>
      </>
    )
}

 return (
    <>
      <ScrollView>
       <View style={styles.container}>
            <Image
              source={{ uri: designPost.image}}
              style={styles.image}
            />
            <View style={{position: "absolute"}}>
              {backButton()}
              {heartButton()}
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
              style={{width: 60, height: 60, borderRadius: 50, marginLeft: 10}}
            />
       </View>
          <Text style={styles.text}>{designPost.propertyDetails}  &#8226;</Text>
          <View style={styles.line} />
            <Text style={styles.description}>
               {designPost.description}
            </Text>
      </ScrollView>
    </>

  )
}

export default PostDetails

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
      fontSize: 18,
      fontWeight: "700",
      marginTop: 0,
  },
  text: {
      fontWeight: "400",
      color: "#aeb0af",
      marginVertical: 10,
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