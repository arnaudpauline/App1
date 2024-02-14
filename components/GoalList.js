import React from 'react';
import { FlatList } from 'react-native';
import GoalItem from './GoalItem';

const GoalList = ({ data, onDelete, onEdit }) => (
  <FlatList
    data={data}
    renderItem={({ item, index }) => (
      <GoalItem item={item} index={index} onDelete={onDelete} onEdit={onEdit} />
    )}
    keyExtractor={(item, index) => index.toString()}
  />
);

export default GoalList;
