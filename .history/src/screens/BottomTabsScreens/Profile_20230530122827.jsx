import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native"

const Profile = () => {
   return (
      <>
         <ScrollView>
            <View style={styles.container}>
               <Text style={styles.profile}>Profile</Text>
               <Text style={styles.description}>Log in to start planning your next trip</Text>
            </View>
            <View style={styles.buttonContainer}>
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
      alignItems: "flex-start",
      margin: 20
    },
    profile: {    
      letterSpacing: .5,                                                                         
      marginTop: 50,
      fontSize: 27,
      fontWeight: "600"
    },
    description: {
      paddingRight: 90,
      marginTop: 10,
      fontSize: 18,
      fontWeight: "100",
      color: "grey"
    },
    buttonContainer: {
      justifyContent: "center",
      alignItems: "center",
    },
    loginButton: {
      marginTop: 35,
      alignItems: "center",
      textAlign: "center",
      marginHorizontal: 100,
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