import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Provider as PaperProvider } from "react-native-paper";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";
import Home from "./src/screens/Home";
import Story from "./src/screens/Story";
import Bookmark from "./src/screens/Bookmark";
import Help from "./src/screens/Help";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Story" component={Story} />
          <Stack.Screen name="Bookmark" component={Bookmark} />
          <Stack.Screen name="Help" component={Help} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
