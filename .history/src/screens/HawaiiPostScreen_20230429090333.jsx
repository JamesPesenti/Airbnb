import { Image, StyleSheet, FlatList, Text, View } from 'react-native'
import React from 'react'
import HawaiiPostDetails from "../components/HawaiiPostDetails"
import designPost from "../../assets/data/designPost"
import hawaiiPost from "../../assets/data/hawaiiPost"
import { useRoute } from "@react-navigation/native"


const HawaiiPostScreen = (props) => {
  const route = useRoute()

  const post = hawaiiPost.find(place => place.id === route.params.postId)

  return (
    <>
     <View style={{backgroundColor: "white"}}>
      <HawaiiPostDetails hawaiipost={post} />
     </View>
    </>
  )
}

export default HawaiiPostScreen

const styles = StyleSheet.create({})