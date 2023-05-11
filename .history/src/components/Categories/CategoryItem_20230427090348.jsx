import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const CategoryItem = ({ isSelected, category, setSelectedId }) => {

  const handlePress = () => {
    setSelectedId(category.id)
  }

  return (
   <>
    {isSelected && (
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
    marginHorizontal: 15,
    padding: 8,
    top: 70
  },
  image: {
    width: 25, 
    height: 25,
  },
  typeText: {
    textAlign: "center",
    alignItems: "center",
    fontSize: 12,
  
  }
})