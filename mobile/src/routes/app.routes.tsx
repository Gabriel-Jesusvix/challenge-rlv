import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from "react"
import { HomeNews } from "../modules/News/HomeNews"

const { Navigator ,Screen } = createNativeStackNavigator()


export function AppRoutes() {
  return (
    <NavigationContainer>
      <Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Screen 
          name="HomeNews"
          component={HomeNews}
        />
       
      </Navigator>
    </NavigationContainer>
  )
}


