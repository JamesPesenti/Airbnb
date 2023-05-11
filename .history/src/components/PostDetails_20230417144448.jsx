import { Pressable, StyleSheet, Image, Text, View, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"

const PostDetails = ({ designPost }) => {

  const navigation = useNavigation()

  const backButton = () => {
      return(
        <>
         <View style={{top: 40, left: 10, padding: 5, backgroundColor: "white", borderRadius: 100,}}>
          <Pressable onPress={() => navigation.goBack()}>
            <Image 
              source={{ uri: "https://icons.veryicon.com/png/o/miscellaneous/integrated-icon-library-of-middle-and/left-arrow-back.png" }}
              style={{width: 19, height: 19, left: 2}}
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
            </View>
       </View>
       <View>
            <Text style={styles.location}>{designPost.location}</Text>
            <Text style={styles.text}>{designPost.miles}</Text>
            <Text style={styles.text}>{designPost.dates}</Text>
            <Text style={styles.price}>${designPost.price} <Text style={styles.nightText}>night</Text></Text>
            <Text style={styles.description}>
               {designPost.description}
            </Text>
       </View>
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
  location: {
      fontWeight: "700",
      marginTop: 0,
  },
  text: {
      fontWeight: "400",
      color: "#aeb0af"
  },
  price: {
    fontWeight: "700",
  },
  description: {
    marginVertical: 10,
    fontSize: 16,
    lineHeight: 24
  },
})