import { Image, StyleSheet, FlatList, Text, View } from 'react-native'
import React from 'react'
import PostDetails from "../components/HawaiiPostDetails"
import designPost from "../../assets/data/designPost"
import post from "../../assets/data/post"
import { useRoute } from "@react-navigation/native"


const PostScreen = (props) => {
  const route = useRoute()

  const post = designPost.find(place => place.id === route.params.postId)

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