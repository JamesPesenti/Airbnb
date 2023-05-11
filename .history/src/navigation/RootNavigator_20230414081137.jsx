import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import HomeScreen from '../screens/HomeScreen'
import SearchResults from '../screens/SearchResults'
import SearchResultsMap from "../screens/SearchResultsMap"
import DestinationSearch from '../screens/DestinationSearch'
import Guests from '../screens/Guests'
import PostScreen from "../screens/PostScreen"

import Fontisto from "react-native-vector-icons/Fontisto"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Feather from "react-native-vector-icons/Feather"
import EvilIcons from "react-native-vector-icons/EvilIcons"



const Stack = createStackNavigator()

const RootNavigator = () => {

  return (
      <Stack.Navigator
         // screenOptions={{headerShown: false}}
      >
         <Stack.Screen 
            name="BottomTabs" 
            component={BottomTabs} 
            options={{
               headerShown: false,
            }}
         />
         <Stack.Screen 
            name={"Destination Search"} 
            component={DestinationSearch}
            options={{
               title: "Search your destination",
               headerShown: false
            }}
         />
         <Stack.Screen 
            name={"Guests"} 
            component={Guests}
            options={{
               title: "How many guests?"
            }}
         />
           <Stack.Screen 
            name={"PostScreen"} 
            component={PostScreen}
            options={{
               headerShown: false
            }}
         />
      </Stack.Navigator>
  )
}

const CategoryStack = createStackNavigator()

const CategoryStackNavigator = () => {

  return (
      <CategoryStack.Navigator
         // screenOptions={{headerShown: false}}
      >
         <CategoryStack.Screen 
            name="BottomTabs" 
            component={BottomTabs} 
            options={{
               headerShown: false
            }}
         />
         <CategoryStack.Screen 
            name={"Destination Search"} 
            component={DestinationSearch}
            options={{
               title: "Search your destination",
               headerShown: false
            }}
         />
         <CategoryStack.Screen 
            name={"Guests"} 
            component={Guests}
            options={{
               title: "How many people?"
            }}
         />
      </CategoryStack.Navigator>
  )
}

const Explore = createStackNavigator()

const ExploreNavigator = () => {
   return (
      <Explore.Navigator
         screenOptions={{headerShown: false}}
      > 
         <Explore.Screen name={"Home"} component={HomeScreen} />
         <Explore.Screen name={"Map"} component={SearchResultsMap} />
         <Explore.Screen name={"Category"} component={CategoryStackNavigator} />
         <Explore.Screen name={"SearchResults"} component={SearchResultsTabNavigator} />
      </Explore.Navigator>
   )
}


const TopTab = createMaterialTopTabNavigator()

const SearchResultsTabNavigator = () => {
   return (
      <>
         <TopTab.Navigator
            style={{
               marginTop: 25
            }}
            screenOptions={{
               tabBarIndicatorStyle: {
                  backgroundColor: "#f15454",
                  height: 2,
               },
               tabBarStyle: {
                  backgroundColor: "white",
               },
               tabBarContentContainerStyle: {
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'space-between',
               },
               tabBarLabelStyle: {
                  fontWeight: '600',
               },
               tabBarActiveTintColor: "#f15454",
            }}
         >
            <TopTab.Screen name={"Search"} component={SearchResults} />
            <TopTab.Screen name={"Map"} component={SearchResultsMap}/>
         </TopTab.Navigator>
      </>
   )
}


const BottomTab = createBottomTabNavigator()

const BottomTabs = () => {
   return (
      <>
         <BottomTab.Navigator
            screenOptions={{
               headerShown: false,
               tabBarInactiveTintColor: "grey",
               tabBarActiveTintColor: "#f15454"
            }}
         >
            <BottomTab.Screen 
               name="Explore"
               component={ExploreNavigator} 
               options={{
                  tabBarIcon: ({color}) => (
                     <Fontisto name="search" size={25} color={color} />
                  )
               }}
            />
              <BottomTab.Screen 
               name="Wishlists"
               component={HomeScreen} 
               options={{
                  tabBarIcon: ({color}) => (
                     <FontAwesome name="heart-o" size={25} color={color} />
                  )
               }}
            />
              <BottomTab.Screen 
               name="Trips"
               component={HomeScreen} 
               options={{
                  tabBarIcon: ({color}) => (
                     <FontAwesome5 name="airbnb" size={25} color={color} />
                  )
               }}
            />
              <BottomTab.Screen 
               name="Inbox"
               component={HomeScreen} 
               options={{
                  tabBarIcon: ({color}) => (
                     <Feather name="message-square" size={25} color={color} />
                  )
               }}
            />
              <BottomTab.Screen 
               name="Profile"
               component={HomeScreen} 
               options={{
                  tabBarIcon: ({color}) => (
                     <EvilIcons name="user" size={25} color={color} />
                  )
               }}
            />
            
         </BottomTab.Navigator>
      </>
   )
}

export default RootNavigator

const styles = StyleSheet.create({})