import { StyleSheet, View, Text } from "react-native"
import { useState, useMemo } from "react"
import SearchButton from "../../components/SearchButton"
import Categories from "../../components/Categories/Categories"
import CategoryPost from "../../components/Categories/CategoryPost"
import categories from "../../../assets/data/categories"
import designPost from "../../../assets/data/designPost"


const Home = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(categories[0].id)

  const filteredDesignPosts = useMemo(() => {
    const selectedCategory = categories.find((category) => category.id === selectedCategoryId)
    return selectedCategory ? designPost.filter((post) => post.type === selectedCategory.type) : []
  }, [selectedCategoryId])

  return (
    <>
     <View style={styles.container}>
        <SearchButton />
        <Categories selectedCategoryId={selectedCategoryId} setSelectedCategoryId={setSelectedCategoryId}/>
        <CategoryPost data={filteredDesignPosts} />
     </View>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "white",
    marginTop: 20,
    justifyContent: 'center',
    alignItems: "center"
  }
})