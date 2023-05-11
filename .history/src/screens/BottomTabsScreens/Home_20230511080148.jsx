import { StyleSheet, View, Text } from "react-native"
import SearchButton from "../../components/SearchButton"
import Categories from "../../components/Categories/Categories"
import CategoryPost from "../../components/Categories/CategoryPost"

const Home = () => {
  return (
    <>
     <View style={styles.container}>
        <SearchButton />
        <Categories />
        <CategoryPost />
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
  }
})