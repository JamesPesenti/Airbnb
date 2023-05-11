import { Image, StyleSheet, FlatList, Text, View } from 'react-native'
import React from 'react'
import DesignPostDetails from "../components/DesignPostDetails"
import designPost from "../../assets/data/designPost"
import { useRoute } from "@react-navigation/native"


const PostScreen = (props) => {
  const route = useRoute()

  const post = designPost.find(place => place.id === route.params.postId)

  return (
    <>
     <View style={{backgroundColor: "white"}}>
      <DesignPostDetails designPost={post} />
     </View>
    </>
  )
}

export default PostScreen

const styles = StyleSheet.create({})