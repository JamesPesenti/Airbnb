import { View, Text, StyleSheet, ScrollView } from "react-native"

const Wishlists = () => {
   return (
      <>
         <ScrollView>
            <View style={styles.container}>
               <Text style={styles.wishlists}>Wishlists</Text>
            </View>
         </ScrollView>
      </>
   )
}

export default Wishlists

const styles = StyleSheet.create({
   container: {
      margin: 50,
      alignItems: "center"
    },
    wishlists: {
      fontSize: 25,
      fontWeight: "600"
    }
})