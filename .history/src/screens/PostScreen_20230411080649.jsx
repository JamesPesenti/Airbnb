import { Image, StyleSheet, FlatList, Text, View } from 'react-native'
import React from 'react'
import PostDetails from "../components/PostDetails"
import places from "../../assets/data/feed"
import { useRoute } from "@react-navigation/native"


const PostScreen = (props) => {
  const route = useRoute()

  const post = places.find(place => place.id === route.params.postId)

  return (
    <>
     <View style={{backgroundColor: "white"}}>
      <PostDetails post={post} />
     </View>
    </>
  )
}

export default PostScreen

const styles = StyleSheet.create({})