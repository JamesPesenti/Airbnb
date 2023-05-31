import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native"

const Profile = () => {
   return (
      <>
         <ScrollView>
            <View style={styles.container}>
               <Text style={styles.wishlists}>Profile</Text>
               <Text style={styles.description}>Log in to start planning your next trip</Text>
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

export default Profile

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
      paddingRight: 60,
      marginTop: 10,
      marginLeft: -5,
      fontSize: 18,
      fontWeight: "100",
      color: "grey"
    },
    loginButton: {
      marginTop: 35,
      marginLeft: 40,
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