import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import { useNavigation } from "@react-navigation/native"

const PostItem = ({ hawaii }) => {

  const navigation = useNavigation()

  const goToPostScreen = () => {
    navigation.navigate("PostScreen", {postId: hawaii.id})
  }

  return (
    <>
       <Pressable onPress={goToPostScreen} style={styles.container}>
            <Image 
              source={{ uri: hawaii.image}}
              style={styles.image}
            />
            <Text style={styles.location}>{hawaii.location}</Text>
            <Text style={styles.text}>{hawaii.miles}</Text>
            <Text style={styles.text}>{hawaii.dates}</Text>
            <Text style={styles.price}>${hawaii.price} <Text style={styles.nightText}>night</Text></Text>
       </Pressable>
    </>
  )
}

export default PostItem

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        marginBottom: 5
    },
    image: {
        width: "100%",
        aspectRatio: 1.2 / 1,
        // width: 320,
        height: 250, 
        resizeMode: "cover", 
        borderRadius: 10
    },
    location: {
        fontWeight: "700",
        marginTop: 10,
    },
    text: {
        fontWeight: "400",
        color: "#aeb0af"
    },
    price: {
      fontWeight: "700",
    },
    nightText: {
      fontWeight: "400",
      color: "#aeb0af"
    }

})