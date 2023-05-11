import { StyleSheet, Image, Text, View, ScrollView } from 'react-native'
import React from 'react'

const PostDetails = ({ designPost }) => {
  return (
    <>
      <ScrollView>
       <View style={styles.container}>
            <Image 
              source={{ uri: designPost.image}}
              style={styles.image}
            />
       </View>
       <View style={styles.onImage}>
          <Text>Back Button</Text>
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