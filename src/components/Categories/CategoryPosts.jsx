import { Image, StyleSheet, FlatList, Text, View } from 'react-native'
import React from 'react'
import DesignPostItem from "../DesignPostItem"
// import post from "../../../assets/data/post"
import designPost from "../../../assets/data/designPost"


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