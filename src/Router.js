import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Categories from "./pages/categories";
import Meals from "./pages/meals";
import Details from "./pages/details";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="categories"
          component={Categories}
          options={{
            title: "Categories",
            headerTitleStyle: {
              color: "orange",
              fontWeight: "bold",
            },
            headerTintColor: "orange",
          }}
        />
        <Stack.Screen
          name="meals"
          component={Meals}
          options={{
            title: "Meals",
            headerTitleStyle: {
              color: "orange",
              fontWeight: "bold",
            },
            headerTintColor: "orange",
          }}
        />
        <Stack.Screen
          name="details"
          component={Details}
          options={{
            title: "Detail",
            headerTitleStyle: {
              color: "orange",
              fontWeight: "bold",
            },
            headerTintColor: "orange",
          }}
        />
      </Stack.Navigator>
      <StatusBar></StatusBar>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
