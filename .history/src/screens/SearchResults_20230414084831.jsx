import { Image, StyleSheet, FlatList, Text, View } from 'react-native'
import React from 'react'
import PostItem from "../components/PostItem"
import feed from "../../assets/data/hawaii"

const SearchResults = () => (
   <>
    <View style={styles.container}>
         <FlatList 
            data={feed}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
            <>
               <PostItem
                  feed={item}
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





