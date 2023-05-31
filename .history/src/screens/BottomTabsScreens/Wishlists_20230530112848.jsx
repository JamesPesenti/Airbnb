import { View, Text, StyleSheet, ScrollView } from "react-native"

const Wishlists = () => {
   return (
      <>
         <ScrollView>
            <View style={styles.container}>
               <Text style={styles.wishlists}>Wishlists</Text>
               <Text style={styles.login}>Log in the view your wishlists</Text>
            </View>
         </ScrollView>
      </>
   )
}

export default Wishlists

const styles = StyleSheet.create({
   container: {
      flex: 1
    },
    wishlists: {
      marginTop: 50,
      marginLeft: 20,
      fontSize: 25,
      fontWeight: "600"
    },
    login: {
      paddingHorizontal: 40,
      marginTop: 50,
      marginLeft: 0,
      fontSize: 20,
      fontWeight: "500"
    }
})