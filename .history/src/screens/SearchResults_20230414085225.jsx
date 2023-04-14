import { Image, StyleSheet, FlatList, Text, View } from 'react-native'
import React from 'react'
import PostItem from "../components/PostItem"
import hawaiiPost from "../../assets/data/hawaiiPost"

const SearchResults = () => (
   <>
    <View style={styles.container}>
         <FlatList 
            data={hawaiiPost}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
            <>
               <PostItem
                  hawaiiPost={item}
               />
            </>
         )}
         />
     </View>
   </>
)

export default SearchResults

const styles = StyleSheet.create({
   container: {
      marginTop: 0,
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
   }
})





