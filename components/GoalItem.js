import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const GoalItem = ({ item, index, onDelete, onEdit }) => (
  <View style={styles.goalContainer}>
    <Text style={styles.itemText}>{item}</Text>
    <View style={styles.iconContainer}>
      <TouchableOpacity onPress={() => onEdit(index)}>
        <MaterialIcons style={styles.MaterialIcons} name="edit" size={24} color="darkblue" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(index)}>
        <Text style={styles.removeButton}>X</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  goalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  MaterialIcons: {
    fontSize: 25,
    marginLeft: 10,
  },
  removeButton: {
    color: 'red',
    fontSize: 25,
    marginLeft: 10,
  },
});

export default GoalItem;
