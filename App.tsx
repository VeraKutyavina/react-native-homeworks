import React from 'react';
import { View, Button, Text } from 'react-native';
import { observer } from 'mobx-react-lite';
import CounterStore from './store/count';
import ClickCounter from './store/click';

const App = observer(() => {
  const onPlusClick = () => {
    CounterStore.increment()
    ClickCounter.increment()
  }

  const onMinusClick = () => {
    CounterStore.decrement()
    ClickCounter.increment()
  }

  const onResetClick = () => CounterStore.reset();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{CounterStore.count}</Text>
      <Button onPress={onPlusClick} title="+" />
      <Button onPress={onMinusClick} title="-" />
      <Button onPress={onResetClick} title="Reset" />
      <Text>Total click count: {ClickCounter.count}</Text>
    </View>
  )
})

export default App
