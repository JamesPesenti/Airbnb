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
   
      </ScrollView>
    </>

  )
}

export default PostDetails

const styles = StyleSheet.create({
   container: {
      margin: 0,
      marginTop: 0,
      marginBottom: 0
  },
  image: {
      width: "100%", 
      height: 500,
      top: -30,
      alignSelf: "center",
      position: "absolute", 
      resizeMode: "cover", 
      borderRadius: 0
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