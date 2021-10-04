import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeRouter, Route } from "react-router-native";
import Articles from "./src/home";
import Create from "./src/create";
import Btn from "./src/buttons";
import Detail from "./src/details";

const Stack = createStackNavigator();

export default function App() {
  return (
    // <NativeRouter>
    //   <Route exact path="/" component={Btn} />
    //   <Route exact path="/" component={Articles} />
    //   <Route exact path="/create" component={Create} />
    //   <Route exact path="/Details" component={Detail} />

    // </NativeRouter>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Btn} />
        <Stack.Screen name="Article" component={Articles} />
        <Stack.Screen name="Create" component={Create} />
        <Stack.Screen name="Details" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
