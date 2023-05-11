import { Pressable, Image, StyleSheet, FlatList, Text, View } from 'react-native'
import { useState } from "react"
import categories from "../../../assets/data/categories"
import CategoryItem from "../Categories/CategoryItem"
import { useNavigation } from "@react-navigation/native"

const Categories = (props) => {

  const [selectedId, setSelectedId] = useState(null)
  const [items, setItems] = useState([])

  const navigation = useNavigation()

  const handleCategoryClick = (category) => {
    const filteredItems = props.categories.filter(item => item.type === category)
    setItems(filteredItems)
  }

  // FlatList renderItem for the categories list
  const renderItem = ({ item }) => {
    const isSelected = item.id === selectedId;

    const onPress = (category) => {
      setSelectedId(item.id)
      navigation.navigate("Home", {postId: item.id})
      handleCategoryClick(category)
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
      height: 120,
      overflow: 'hidden',
      marginTop: 5
    }
})