import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AboutUsScreen from './components/AboutUsScreen';
import UserProfileScreen from './components/UserProfileScreen';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Feed">
          <Drawer.Screen name="AboutUs" component={AboutUsScreen} />
          <Drawer.Screen name="Profile" component={UserProfileScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
