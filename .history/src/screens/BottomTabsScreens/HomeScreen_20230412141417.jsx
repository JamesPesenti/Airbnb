import { ScrollView, Image, StyleSheet, Text, TextInput, View, Pressable } from 'react-native'
import React from 'react'
import SearchButton from "../components/SearchButton"
import Categories from "../components/Categories/Categories"
import CategoryPosts from "../components/Categories/CategoryPosts"
import SearchResults from '../screens/SearchResults'
import MapButton from "../components/MapButton"

const HomeScreen = () => {

  return (
    <>
       <View style={styles.container}>
          <SearchButton />
          <Categories />
          <CategoryPosts /> 
          <MapButton />
       </View>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        marginTop: 20,
        backgroundColor: "white"
    }
})






