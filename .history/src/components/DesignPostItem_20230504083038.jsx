import { StyleSheet, Text, View, Pressable } from 'react-native'
import designPost from "../../assets/data/designPost"
import { useNavigation } from "@react-navigation/native"
import ImageCarousel from "../components/ImageCarousel"


const DesignPostItem = ({ designPost }) => {

  const navigation = useNavigation()

  const goToPostScreen = () => {
    navigation.navigate("DesignPostScreen", {postId: designPost.id})
  }

  return (
    <>
       <Pressable onPress={goToPostScreen} style={styles.container}>
            <ImageCarousel />
            <Text style={styles.location}>{designPost.location}</Text>
            <Text style={styles.text}>{designPost.miles}</Text>
            <Text style={styles.text}>{designPost.dates}</Text>
            <Text style={styles.price}>${designPost.price} <Text style={styles.nightText}>night</Text></Text>
       </Pressable>
    </>
  )
}

export default DesignPostItem

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