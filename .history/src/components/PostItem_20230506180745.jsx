import { Image, StyleSheet, Text, View, Pressable } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import { HawaiiDetailsImageCarousel } from "../components/ImageCarousel"
import DesignPostDetails from './DesignPostDetails'

const PostItem = ({ hawaiiPost, designPost }) => {

  const navigation = useNavigation()

  const goToHawaiiPostScreen = () => {
    navigation.navigate("HawaiiPostScreen", {postId: hawaiiPost.id})
  }

  return (
    <>
       <Pressable onPress={goToHawaiiPostScreen} style={styles.container}>
          <DesignPostDetails designPost={designPost}/>
            {/* <HawaiiDetailsImageCarousel
              hawaiiPost={hawaiiPost}
            />
            <Text style={styles.location}>{hawaiiPost.location}</Text>
            <Text style={styles.text}>{hawaiiPost.miles}</Text>
            <Text style={styles.text}>{hawaiiPost.dates}</Text>
            <Text style={styles.price}>${hawaiiPost.price} <Text style={styles.nightText}>night</Text></Text> */}
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