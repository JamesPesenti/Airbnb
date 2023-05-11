import { Pressable, Image, StyleSheet, FlatList, Text, View } from 'react-native'
import { useState } from "react"
import categories from "../../../assets/data/categories"
import CategoryItem from "../Categories/CategoryItem"
import { useNavigation } from "@react-navigation/native"
import CategoryPost from "./CategoryPost"

const Categories = (props) => {

  const [selectedId, setSelectedid] = useState()
  const [items, setItems] = useState([])

  const navigation = useNavigation()

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }

  // FlatList renderItem for the categories list
  const renderItem = ({ item }) => {
    const isSelected = item.id === selectedId;

    const onPress = () => {
      handleCategoryClick(item)
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


// FlatList renderItem for the filtered item in categories list
const renderFilteredItems = ({ item }) => {

  const isSelected = item.id === selectedId;

  const onPress = () => {
    setSelectedId(item.id)
    navigation.navigate("Home", {postId: item.id})
    handleCategoryClick(item.type)
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
  )
}
// End renderFilteredItem for the filtered item in categories list
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
      flex: 0,
      overflow: 'hidden',
      marginTop: 5
    },
    filteredItemsContainer: {
      flex: 1,
      marginVertical: 20,
      marginHorizontal: 20
    }
})