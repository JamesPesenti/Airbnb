import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native"

const Wishlists = () => {
   return (
      <>
         <ScrollView>
            <View style={styles.container}>
               <Text style={styles.wishlists}>Wishlists</Text>
               <Text style={styles.login}>Log in to view your wishlists</Text>
               <Text style={styles.description}>You can create, view, or edit wishlist's once you've logged in.</Text>
               <Pressable
                  style={styles.loginButton}
                  onPress={() => {}}
               >
                  <Text style={styles.loginText}>Log In</Text>
               </Pressable>
            </View>
         </ScrollView>
      </>
   )
}

export default Wishlists

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "flex-start"
    },
    wishlists: {    
      letterSpacing: .5,                                                                         
      marginTop: 50,
      marginLeft: 20,
      fontSize: 25,
      fontWeight: "600"
    },
    login: {
      paddingHorizontal: 60,
      marginTop: 50,
      marginLeft: -20,
      fontSize: 20,
      fontWeight: "500"
    },
    description: {
      paddingHorizontal: 60,
      marginTop: 10,
      marginLeft: -20,
      fontSize: 18,
      fontWeight: "100",
      color: "grey"
    },
    loginButton: {
      marginTop: 40,
      marginLeft: 20,
      alignItems: "center",
      textAlign: "center",
      backgroundColor: "#f15454",
      borderRadius: 5,
      width: 80,
      height: 40
    },
    loginText: {
      marginTop: 10,
      color: "white",
      fontSize: 15,
      fontWeight: "600"
    }
})