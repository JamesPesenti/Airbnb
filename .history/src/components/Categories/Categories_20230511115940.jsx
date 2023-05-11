import { Pressable, Image, StyleSheet, FlatList, Text, View } from 'react-native'
import { useState } from "react"
import categories from "../../../assets/data/categories"
import designPost from "../../../assets/data/designPost"
import CategoryItem from "../Categories/CategoryItem"
import { useNavigation } from "@react-navigation/native"
import CategoryPost from "../Categories/CategoryPost"

const Categories = (props) => {

  const [selectedId, setSelectedId] = useState(null)

  const navigation = useNavigation()

  const handleCategoryClick = (category) => {
    setSelectedId(category.id)
  }

  const filteredItems = categories.filter(item => item.id === selectedId)
  const filteredDesignPosts = filteredItems.length > 0 ? designPost.filter(item => item.category === filteredItems[0].type) : []

  // FlatList renderItem for the categories list
  const renderItem = ({ item }) => {
    const isSelected = item.id === selectedId;

    const onPress = () => {
      setSelectedId(item.id)
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
      <View style={styles.filteredItemsContainer}>
            <CategoryPost data={filteredDesignPosts.length > 0 ? filteredDesignPosts[0].category : null} />
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
      marginVertical: -30,
      marginHorizontal: 20
    }
})
