import { Image, StyleSheet, FlatList, Text, View } from 'react-native'
import React from 'react'
import PostDetails from "../components/PostDetails"
import designPost from "../../assets/data/designPost"
import { useRoute } from "@react-navigation/native"


const PostScreen = (props) => {
  const route = useRoute()

  const designPost = designPost.find(designPost => designPost.id === route.params.designPostId)

  return (
    <>
     <View style={{backgroundColor: "white"}}>
      <PostDetails designPost={designPost} />
     </View>
    </>
  )
}

export default PostScreen

const styles = StyleSheet.create({})