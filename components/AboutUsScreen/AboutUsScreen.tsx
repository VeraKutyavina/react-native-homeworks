import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const AboutUsScreen = () => {
  return(
    <>
      <View style={styles.container}>
        <Text> Here should be some information about us </Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
  },
});


export default AboutUsScreen;