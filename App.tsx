import React, { useState } from 'react';
import { observer } from 'mobx-react-lite'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductList from "./components/ProductList";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import Favorite from "./components/Favorite";

const Stack = createNativeStackNavigator();

const AppTodo = observer(() => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {props => <ProductList {...props} />}
        </Stack.Screen>
        <Stack.Screen name="ProductCard">
          {props => <ProductCard {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Cart">
          {props => <Cart {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Favorite">
          {props => <Favorite {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
})

export default AppTodo;