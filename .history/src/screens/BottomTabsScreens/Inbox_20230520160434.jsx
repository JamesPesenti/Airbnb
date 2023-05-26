import { StyleSheet,ScrollView, Text, View, TextInput, Pressable } from 'react-native'
import { useState } from 'react'
import { useNavigation } from "@react-navigation/native"

const Inbox = () => {

  const [gender, setGender] = useState('man');
  const [age, setAge] = useState(30);
  const [priceMin, setPriceMin] = useState(25);
  const [priceMax, setPriceMax] = useState(100);
  const [hobbies, setHobbies] = useState('');
  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState('');

  return (
    <ScrollView>
      <View style={styles.container}>
      <Text style={styles.label}>Who is it for?</Text>
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
        style={styles.enterButton}
        onPress={() => {}}
      >
        <Text style={styles.login}>Login</Text>
      </Pressable>
    </View>
    </ScrollView>
  )
}

export default Inbox


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 500,
    backgroundColor: "white",
    margin: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    elevation: 3.3
  },
  email: {
    height: 38,
    width: 100,
    backgroundColor: "white",
    borderBottomColor: "#f15454",
    borderBottomWidth: 1,
    marginVertical: 5
  },
  password: {
    height: 40,
    width: 100,
    backgroundColor: "white"
  },
  enterButton: {
    marginTop: 10, 
    width: 50, 
    height: 30, 
    backgroundColor: "white", 
    borderWidth: 1, 
    borderRadius: 5
  },
  login: {
    fontSize: 15, 
    justifyContent: "center", 
    textAlign: "center", 
    alignItems: "center"
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
})