import { StyleSheet, ScrollView, Image, Text, View, TextInput, Pressable, Alert } from 'react-native'
import { useState } from 'react'
import { useNavigation } from "@react-navigation/native"

const Inbox = () => {

  const [people, setPeople] = useState(0);
  const [age, setAge] = useState(30);
  const [priceMax, setPriceMax] = useState(200);
  const [location, setLocation] = useState("");
  const [amenities, setAmenities] = useState('');
  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState();

  const API_URL = "http://192.168.0.30:3000/api"

  const onSubmit = async () => {
    if (loading) {
      return;
    }
    setLoading(true)
    setResult("")
    try {
      const response = await fetch(`${API_URL}/generate-recommendedProperties`, {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify({ priceMax, location, people, amenities  }),
      })
      const data = await response.json();
      setResult(data.result);
    } catch (e) {
      Alert.alert("Couldn't generate properties", e.message)
    } finally {
      setLoading(false)
    }
  }
  
  console.log(result)
 
  // When properties are loading
  if (loading) {
    return (
      <>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingGifts}>Loading properties</Text>
          <Image 
            // airbnb
            // source={{ uri: "https://hackernoon.com/images/0*smsSMhaW2J5RgY8G.gif"}}
            source={{ uri: "https://hackernoon.com/images/0*smsSMhaW2J5RgY8G.gif"}}
            style={styles.loading}
            resizeMode="contain"
          />
        </View>
      </>
    )
  }

  // When gift ideas render
  const onTryAgain = () => {
    setResult("")
  }

  if (result) {
    return (
      <>
        <View style={styles.container}>
          <Text>Here are some great Christmas gift ideas</Text>
          <Text>{result}</Text>
          <Pressable
            style={styles.tryAgainButton}
            onPress={onTryAgain}
          >
            <Text>Try Again</Text>
          </Pressable>
        </View>
      </>
    )
  }


  return (
    <ScrollView>
      <View style={styles.container}>
      <Text style={styles.label}>Who is it for?</Text>
      <View style={styles.selectorContainer}>
        <Text 
          onPress={() => setGender("man")}
          style={[styles.selector, 
            gender === "man" && {backgroundColor: "gainsboro"}]}
          >
            Man
          </Text>
        <Text 
          onPress={() => setGender("woman")}
          style={[styles.selector, 
            gender === "woman" && {backgroundColor: "gainsboro"}]}
          >
            Woman
          </Text>
      </View>
      <Text style={styles.label}>Age</Text>
      <TextInput
        placeholder="Age"
        keyboardType="numeric"
        style={styles.input}
        value={age.toString()}
        onChangeText={(text) => setAge(Number.parseInt(text || "0"))}
      />
      <Text style={styles.label}>Price from ($)</Text>
      <TextInput
        placeholder="Price from"
        keyboardType="numeric"
        style={styles.input}
        value={priceMin.toString()}
        onChangeText={(s) => setPriceMin(Number.parseInt(s))}
      />

      <Text style={styles.label}>Price to ($)</Text>
      <TextInput
        placeholder="Price to"
        keyboardType="numeric"
        style={styles.input}
        value={priceMax.toString()}
        onChangeText={(s) => setPriceMax(Number.parseInt(s))}
      />

      <Text style={styles.label}>Hobbies</Text>
      <TextInput
        placeholder="Hobbies"
        style={styles.input}
        value={hobbies}
        onChangeText={setHobbies}
      />
      <Pressable
        style={styles.generateButton}
        onPress={onSubmit}
      >
        <Text style={styles.login}>Generate gift ideas</Text>
      </Pressable>
    </View>
    </ScrollView>
  )
}

export default Inbox


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 550,
    backgroundColor: "white",
    margin: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    elevation: 3.3
  },
  selectorContainer: {
    flexDirection: "row",
  },
  selector: {
    flex: 1,
    textAlign: "center",
    backgroundColor: "white",
    margin: 5,
    padding: 16,
    borderRadius: 5,
    overflow: "hidden",
  },
  input: {
    fontSize: 16,
    borderColor: "#353740",
    borderWidth: 1,
    borderRadius: 4,
    padding: 12,
    marginTop: 6,
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    color: "gray",
  },
  generateButton: {
    backgroundColor: "white",
    padding: 10,
    marginBottom: 10,
    borderColor: "gainsboro",
    borderWidth: 3,
    borderRadius: 5
  },
  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    padding: 10,
  },
  loading: {
    width: "100%",
    height: "100%"
  },
  tryAgainButton: {
    width: 100,
    height: 100
  },
  loadingGifts: {
    marginTop: 100
  }
})