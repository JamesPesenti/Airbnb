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
                  onPress={() => console.warn("Log in")}
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
      backgroundColor: "white",
      alignItems: "flex-start",
      margin: 20
    },
    wishlists: {    
      letterSpacing: .5,                                                                         
      marginTop: 30,
      fontSize: 27,
      fontWeight: "600"
    },
    login: {
      paddingRight: 80,
      marginTop: 50,
      fontSize: 20,
      fontWeight: "500"
    },
    description: {
      paddingRight: 60,
      marginTop: 10,
      fontSize: 18,
      fontWeight: "100",
      color: "grey"
    },
    loginButton: {
      marginTop: 35,
      alignItems: "center",
      textAlign: "center",
      backgroundColor: "#f15454",
      borderRadius: 5,
      width: 80,
      height: 45
    },
    loginText: {
      marginTop: 10,
      color: "white",
      fontSize: 15,
      fontWeight: "600"
    }
})