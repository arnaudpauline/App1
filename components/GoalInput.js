import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

const GoalInput = ({ onAdd }) => {
  const [newGoal, setNewGoal] = useState('');

  const handleAddGoal = () => {
    if (newGoal.trim() !== '') {
      onAdd(newGoal);
      setNewGoal('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter a new goal"
        value={newGoal}
        onChangeText={text => setNewGoal(text)}
      />
      {Platform.OS === 'android' ? (
        <TouchableNativeFeedback onPress={handleAddGoal} background={TouchableNativeFeedback.Ripple('#adacac')}>
          <View style={styles.addButton}>
            <Button title="Add" onPress={handleAddGoal} color="blue" />
          </View>
        </TouchableNativeFeedback>
      ) : (
        <Button title="Add" onPress={handleAddGoal} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 0.75,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontSize: 20,
    marginRight: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: 'darkblue',
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default GoalInput;
