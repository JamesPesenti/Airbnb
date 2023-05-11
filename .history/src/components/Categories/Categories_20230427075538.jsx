import { Pressable, Image, StyleSheet, FlatList, Text, View } from 'react-native'
import categories from "../../../assets/data/categories"
import CategoryItem from "../Categories/CategoryItem"
import { useNavigation } from "@react-navigation/native"

const Categories = () => {

  const navigation = useNavigation()

  const Underline = () => <View style={{borderBottomWidth: 2, borderBottomColor: "grey"}} />
  const renderSeparator = () => <Underline />

  return (
    <>
      <View style={styles.container}>
            <FlatList 
                data={categories}
                horizontal
                ItemSeparatorComponent={renderSeparator}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
                    <>
                      <Pressable onPress={() => navigation.navigate("SearchResults")}>
                        <CategoryItem 
                          category={item}
                        />
                      </Pressable>
                    </>
                )}
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