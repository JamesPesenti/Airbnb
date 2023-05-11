import { Image, StyleSheet, Text, View, Dimensions, Pressable } from 'react-native'
import { useNavigation } from "@react-navigation/native"

const width = Dimensions.get("screen").width

const PostCarouselItem = (props) => {

  const post = props.post

  const navigation = useNavigation()

  const goToPostDetails = () => {
   navigation.navigate("PostScreen", {postId: post.id})
  }


  return (
      <>
         <Pressable onPress={goToPostDetails} style={[styles.container, { width: width - 70}]}>
          <View style={styles.innerContainer}>
            <Image 
               source={{ uri: post.image}}
               style={styles.image}
            />
               <View style={{flex: 1, opacity: .9, backgroundColor: "white", paddingHorizontal: 20, paddingVertical: 10}}>
                  <Text style={styles.location}>{post.location}</Text>
                  <Text style={styles.text}>{post.miles}</Text>
                  <Text style={styles.text}>{post.dates}</Text>
                  <Text style={styles.price}>${post.price} <Text style={styles.nightText}>night</Text></Text>
               </View>
            </View>
         </Pressable>
      </>
  )
}

export default PostCarouselItem


const styles = StyleSheet.create({
   container: {
       height: 130,
       width: width - 60,
       marginVertical: 10,
       marginRight: 0,
       shadowColor: "#000",
       shadowOffset: {
         width: 0,
         height: 5
       },
       shadowOpacity: 0.34,
       shadowRadius: 6.27,
       elevation: 10
   },
   innerContainer: {
      flexDirection: "row",
      overflow: "hidden",
      borderWidth: .5,
      borderColor: "#FF5A5F",
      borderRadius: 10
   },
   image: {
       height: "100%", 
       aspectRatio: 1,
       resizeMode: "cover", 
   },
   location: {
       fontSize: 13,
       lineHeight: 15,
       fontWeight: "700",
       marginTop: 5,
       marginVertical: 5,
   },
   text: {
       opacity: 1,
       lineHeight: 16,
       fontWeight: "400",
       color: "grey",
   },
   price: {
     fontWeight: "700",
     marginVertical: 5,
   },
});
