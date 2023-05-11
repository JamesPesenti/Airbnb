import { Image, StyleSheet, FlatList, Text, View } from 'react-native'
import React from 'react'
import HawaiiPostDetails from "../components/HawaiiPostDetails"
import designPost from "../../assets/data/designPost"
import post from "../../assets/data/post"
import { useRoute } from "@react-navigation/native"


const HawaiiPostScreen = (props) => {
  const route = useRoute()

 

  return (
    <>
     <View style={{backgroundColor: "white"}}>
      <HawaiiPostDetails post={post} />
     </View>
    </>
  )
}

export default HawaiiPostScreen

const styles = StyleSheet.create({})