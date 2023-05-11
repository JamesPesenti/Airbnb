import { Pressable, Image, StyleSheet, FlatList, Text, View } from 'react-native'
import { useState } from "react"
import categories from "../../../assets/data/categories"
import CategoryItem from "../Categories/CategoryItem"
import { useNavigation } from "@react-navigation/native"

const Categories = () => {

  const [selectedId, setSelectedId] = useState(null)

  const navigation = useNavigation()

  // FlatList renderItem for the categories list
  const renderItem = ({ item }) => {
    const isSelected = item.id === selectedId;

    const onPress = (categories) => {
      setSelectedId(item.id)
      navigation.navigate("Home", {postId: item.id})
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
                data={selectedId ? categories.find((category) => category.id === selectedId).items : categories}
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
    }
})