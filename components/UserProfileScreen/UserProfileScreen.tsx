import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigateButtons from '../NavigateButtons';

const UserProfileScreen = ({ navigation }: any) => {
  return(
    <>
      <NavigateButtons navigation={navigation} />
      <View style={styles.container}>
        <Text> User avatar </Text>
        <Text> User name </Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default UserProfileScreen;