import { ScrollView, Image, StyleSheet, Text, TextInput, View, Pressable } from 'react-native'
import SearchButton from "../../components/SearchButton"
import Categories from "../../components/Categories/Categories"
import CategoryPosts from "../../components/Categories/CategoryPost"
import MapButton from "../../components/MapButton"


const DesignCategory = () => {
   return (
      <>
         <View style={styles.container}>
          <SearchButton />
          <Categories />
          <CategoryPosts /> 
          <MapButton />
       </View>
      </>
   )
}

export default DesignCategory

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: "center",
      marginTop: 20,
      backgroundColor: "white"
  }
})