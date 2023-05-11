import { Pressable, Image, StyleSheet, FlatList, Text, View } from 'react-native'
import { useState } from "react"
import categories from "../../../assets/data/categories"
import CategoryItem from "../Categories/CategoryItem"
import { useNavigation } from "@react-navigation/native"

const Categories = () => {

  const [selectedId, setSelectedId] = useState(null)

  const navigation = useNavigation()

  const renderItem = ({ item }) => {

    const isSelected = item.id === selectedId;

    return (
      <>
        <Pressable onPress={() => setSelectedId(item.id)}>
          <CategoryItem 
            category={item}
            isSelected={isSelected}
          />
          {isSelected && (
            <View style={{ borderBottomWidth: 2, borderBottomColor: "grey" }} />
          )}
        </Pressable>
      </>
    );
  };


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
    }
})