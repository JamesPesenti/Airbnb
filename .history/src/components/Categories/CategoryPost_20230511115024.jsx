import { Image, StyleSheet, FlatList, Text, View } from 'react-native'
import React from 'react'
import DesignPostItem from "../DesignPostItem"
import designPost from "../../../assets/data/designPost"

const CategoryPost = ({ data }) => {

  const filteredDesignPost = designPost.filter((post) => post.type === data)
   
  return (
    <View style={styles.container}>
      <FlatList 
        data={filteredDesignPost}
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
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 20
  }
})