import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const users = [
  'Test Test',
  'Vera Kutyavina',
  'Jeon Jungkook',
  'Park Jimin',
]

const UsersListScreen = ({ navigation }: any) => {
  return(
    <>
      <View style={styles.container}>
        {users.map((user, i) => (
          <Button
            key={i}
            title={user}
            onPress={() => navigation.navigate('UserProfile')}
          />
        ))}
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


export default UsersListScreen;