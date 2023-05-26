import { Dimensions, StyleSheet, ScrollView, Image, Text, View, TextInput, Pressable, TouchableOpacity, Alert } from 'react-native'
import { useState } from 'react'
import { useNavigation } from "@react-navigation/native"
import ResultCard from "../../components/Chat.jsx/ResultCard"

const height = Dimensions.get("window").height

const Inbox = () => {

  const [people, setPeople] = useState("");
  const [age, setAge] = useState("");
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
          <Image 
            // airbnb
            // source={{ uri: "https://hackernoon.com/images/0*smsSMhaW2J5RgY8G.gif"}}
            source={{ uri: "https://hackernoon.com/images/0*smsSMhaW2J5RgY8G.gif"}}
            style={styles.loading}
            resizeMode="contain"
          />
           <Text style={styles.loadingGifts}>Loading</Text>
        </View>
      </>
    )
  }


  // When property results render
  const onGoBack = () => {
    setResult("")
  }

  if (result) {
    return (
      <>
        <ResultCard 
          result={result} 
        />
      </>
    )
  }


  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Ask me for some property recommendations</Text>
        <Text style={styles.label}>Where to?</Text>
        <TextInput
          placeholder="location"
          style={styles.input}
          value={location}
          onChangeText={setLocation}
        />

        <Text style={styles.label}>Age</Text>
        <TextInput
          placeholder="age"
          keyboardType="numeric"
          style={styles.input}
          value={age.toString()}
          onChangeText={(text) => setAge(Number.parseInt(text || "0"))}
        />

        <Text style={styles.label}>Guests</Text>
        <TextInput
          placeholder="# guests?"
          keyboardType="numeric"
          style={styles.input}
          value={people.toString()}
          onChangeText={(text) => setPeople(Number.parseInt(text || "0"))}
        />

        <Text style={styles.label}>Price per night</Text>
        <TextInput
          placeholder="enter max price"
          keyboardType="numeric"
          style={styles.input}
          value={priceMax.toString()}
          onChangeText={(s) => setPriceMax(Number.parseInt(s))}
        />

        <Text style={styles.label}>Amenities</Text>
        <TextInput
          placeholder="pool, grill, fireplace"
          style={styles.input}
          value={amenities}
          onChangeText={setAmenities}
        />
        <TouchableOpacity
          onPress={onSubmit}
        >
          <Text style={styles.generateButton}>Generate Properties</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Inbox


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  resultContainer: {
    flex: 1,
    backgroundColor: "#FF5A5F",
    paddingVertical: 80,
    paddingHorizontal: 20,
    textAlign: "center",
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
    textAlign: "center",
    borderColor: "#353740",
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginTop: 16,
    marginHorizontal: -280,
    marginBottom: 12,
  },
  title: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 18,
    color: "gray",
  },
  label: {
    fontSize: 16,
    color: "gray",
  },
  generateButton: {
    fontSize: 16,
    color: "black",
    backgroundColor: "white",
    textAlign: "center",
    marginVertical: 20,
    padding: 15,
    borderColor: "gainsboro",
    borderWidth: 4,
    borderRadius: 5
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "transparent",
    marginTop: 0,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    elevation: 3.3
  },
  loading: {
    width: "100%",
    height: height
  },
  goBackButton: {
    width: 100,
    height: 100,
    textAlign: "center",
    alignItems: "center",
    marginTop: 20
  },
  goBack: {
    textAlign: "center",
    alignItems: "center",
    marginTop: 0
  },
  result: {
    marginTop: 10,
    fontSize: 16, 
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
  }
})