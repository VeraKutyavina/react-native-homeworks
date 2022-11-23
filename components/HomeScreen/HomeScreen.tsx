import React from 'react';
import { AntDesign } from "@expo/vector-icons";
import UserProfileScreen from '../UserProfileScreen';
import AboutUsScreen from '../AboutUsScreen';
import { createBottomTabNavigator }from '@react-navigation/bottom-tabs'; const Tab = createBottomTabNavigator();
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = () => {
  return(
      <Tab.Navigator>
        <Tab.Screen
          name="О нас"
          component={AboutUsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={28} color="blue" />
            ),
          }}
        />
        <Tab.Screen
          name="Настройки"
          component={UserProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="setting" size={28} color="blue" />
            ),
          }}
        />
      </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default HomeScreen;