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
            <Text style={styles.location}>{designPost.location}</Text>
            <Text style={styles.text}>{designPost.miles}</Text>
            <Text style={styles.text}>{designPost.dates}</Text>
            <Text style={styles.price}>${designPost.price} <Text style={styles.nightText}>night</Text></Text>
            
       </View>
      </ScrollView>
    </>

  )
}

export default PostDetails

const styles = StyleSheet.create({
   container: {
      margin: 20,
      marginTop: 50,
      marginBottom: 40
  },
  image: {
      width: "100%", 
      aspectRatio: 3 / 2.3,
      // width: 320,
      // height: 300, 
      resizeMode: "cover", 
      borderRadius: 10
  },
  location: {
      fontWeight: "700",
      marginTop: 10,
  },
  text: {
      fontWeight: "400",
      color: "#aeb0af"
  },
  price: {
    fontWeight: "700",
  },
  description: {
    marginVertical: 20,
    fontSize: 16,
    lineHeight: 24
  },
})