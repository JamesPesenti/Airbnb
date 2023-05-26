import { View, Text, StyleSheet } from "react-native"

const Wishlists = () => {
   return (
      <>
         <View style={styles.container}>
            <Text>Wishlists Screen</Text>
         </View>
      </>
   )
}

export default Wishlists

const styles = StyleSheet.create({
   container: {
      margin: 50,
      alignItems: "center"
    }
})