import React from "react";
import {createStackNavigation} from "@react-navigation/stack";
import TabNavigator from "../navigation/tabNavigator";
import PostScreen from "../screens/PostScreen"

const Stack=createStackNavigation();

const StackNavigator = () => {
    return (
      <Stack.Navigator
        initialRouteName="createPost"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="createPost" component={TabNavigator} />
        <Stack.Screen name="PostCard" component={PostCard} />
      </Stack.Navigator>
    );
  };
export default StackNavigator;