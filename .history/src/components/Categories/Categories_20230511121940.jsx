import { Pressable, Image, StyleSheet, FlatList, Text, View } from 'react-native'
import { useState } from "react"
import categories from "../../../assets/data/categories"
import designPost from "../../../assets/data/designPost"
import CategoryItem from "../Categories/CategoryItem"
import { useNavigation } from "@react-navigation/native"
import CategoryPost from "../Categories/CategoryPost"

const Categories = ({ selectedCategoryId, setSelectedCategoryId }) => {

  // FlatList renderItem for the categories list
  const renderItem = ({ item }) => {
    const isSelected = item.id === selectedCategoryId;

    const onPress = () => {
      setSelectedCategoryId(item.id)
    }

    return (
      <>
        <Pressable onPress={onPress}>
          <CategoryItem 
            category={item}
            isSelected={isSelected}
          />
           {isSelected && (
            <View style={{ marginTop: 65, marginHorizontal: 20, borderBottomWidth: 10, borderBottomColor: "black" }} />
          )}
        </Pressable>
      </>
    );
  };
  // End renderItem

  return (
    <>
      <View style={styles.container}>
            <FlatList 
                data={categories}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id }
                renderItem={renderItem}
            />
      </View>
    </>
  )
}

export default Categories

const styles = StyleSheet.create({
    container: {
      flex: 1,
      overflow: 'hidden',
      marginTop: 5
    },
    filteredItemsContainer: {
      flex: 1,
      marginVertical: 0,
      marginHorizontal: 20
    }
})
