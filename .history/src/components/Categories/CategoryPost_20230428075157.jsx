import { Image, StyleSheet, FlatList, Text, View } from 'react-native'
import React from 'react'
import DesignPostItem from "../DesignPostItem"
import designPost from "../../../assets/data/designPost"
import post from "../../../assets/data/post"
import PostItem from "../PostItem"


const CategoryPost = () => {
   
  return (
    <View style={styles.container}>
      <FlatList 
        data={designPost}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <>
            <DesignPostItem
              designPost={item}
            />
          </>
        )}
      />
        {/* <FlatList 
          data={post}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
          <>
            <PostItem
              hawaiiPost={item}
            />
          </>
        )}
      /> */}
    </View>
  )
}

export default CategoryPost

const styles = StyleSheet.create({
  container: {
    flex: 3.2,
    justifyContent: 'center',
    alignItems: 'center',
  }
})