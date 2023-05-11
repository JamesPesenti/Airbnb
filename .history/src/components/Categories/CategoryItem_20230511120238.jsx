import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const CategoryItem = ({ isSelected, category }) => {

  return (
   <>
    {isSelected && (
      <View style={styles.container}>
        <Image 
          style={styles.selectedImage}
          source={{ uri: category.image}}
        />        
        <Text style={styles.selectedTypeText}>
          {category.type}
        </Text>
      </View>
    )}
    {!isSelected && (
      <View style={styles.container}>
      <Image 
        style={styles.image}
        source={{ uri: category.image}}
      />        
      <Text style={styles.typeText}>
        {category.type}
      </Text>
    </View>
    )}
   </>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    textAlign: "center",
    marginHorizontal: 11,
    padding: 8,
    top: 56
  },
  selectedImage: {
    width: 25, 
    height: 25,
  },
  image: {
    width: 25, 
    height: 25,
    tintColor: "#9e9e9e"
  },
  selectedTypeText: {
    textAlign: "center",
    alignItems: "center",
    fontSize: 12,
    color: "black"
  },
  typeText: {
    textAlign: "center",
    alignItems: "center",
    fontSize: 12,
    color: "#b5b5b5"
  }

})