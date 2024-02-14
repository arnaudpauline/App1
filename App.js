import React, { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import GoalList from './components/GoalList.js';
import GoalInput from './components/GoalInput.js';
import GoalModal from './components/GoalModal.js';

export default function App() {
  const image = {uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuMVzhH7spS08onAti4K_LdVoyvVIlt-_o1w&s'};

  const [modalVisible, setModalVisible] = useState(false);
  const [editedGoalIndex, setEditedGoalIndex] = useState(null);
  const [editedGoal, setEditedGoal] = useState('');


  const [sampleGoals, setSampleGoals] = useState([
    "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000m d altitude",
    "Acheter mon premier appartement",
    "Perdre 5 kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon",
  ]);

  const handleAddGoal = (goal) => {
    setSampleGoals([...sampleGoals, goal]);
  };

  const handleRemoveGoal = useCallback((index) => {
    const updatedGoals = [...sampleGoals];
    updatedGoals.splice(index, 1);
    setSampleGoals(updatedGoals);
  }, [sampleGoals]);

const handleEditGoal = useCallback((index, goal) => {
    setEditedGoalIndex(index); // Définir l'index de l'objectif en cours de modification
    setEditedGoal(goal); // Définir l'objectif en cours de modification
    setModalVisible(true);
}, []);

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.text}> To do list !</Text>
        <GoalList 
          data={sampleGoals} 
          onDelete={handleRemoveGoal} 
          onEdit={handleEditGoal} />
        <GoalInput onAdd={handleAddGoal} />
        <GoalModal
          visible={modalVisible}
          onClose={() => {
            setModalVisible(false);
            setEditedGoalIndex(null);
          }}
          onSave={(editedGoal) => {
            if (editedGoalIndex !== null) {
              const updatedGoals = [...sampleGoals];
              updatedGoals[editedGoalIndex] = editedGoal;
              setSampleGoals(updatedGoals);
            }
            setModalVisible(false);
            setEditedGoalIndex(null);
            setEditedGoal('');
          }}
          editedGoal={editedGoal}
          editedGoalIndex={editedGoalIndex}
        />
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 60,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'darkblue',
    fontSize: 20,
    fontWeight: 'bold',
  },
});


//CODE AVANT COMPONENTS - code fonctionnel
/*import React, { useState, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, TextInput, Button, TouchableOpacity, Platform } from 'react-native';

export default function App() {
  const [sampleGoals, setSampleGoals] = useState([
    "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000m d altitude",
    "Acheter mon premier appartement",
    "Perdre 5 kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon",
  ]);
  const [newGoal, setNewGoal] = useState('');

  const renderItem = ({ item, index }) => (
    <View style={styles.goalContainer}>
      <Text style={styles.item}>{item}</Text>
        <TouchableOpacity onPress={() => handleRemoveGoal(index)}>
          <Text style={styles.removeButton}>X</Text>
        </TouchableOpacity>
      </View>
  );

  const handleAddGoal = () => {
    if (newGoal.trim() !== '') {
      setSampleGoals([...sampleGoals, newGoal]);
      setNewGoal('');
    }
  };

  const handleRemoveGoal = useCallback((index) => { // Utiliser useCallback
    const updatedGoals = [...sampleGoals];
    updatedGoals.splice(index, 1);
    setSampleGoals(updatedGoals);
  }, [sampleGoals]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}> To do list !</Text>
      <FlatList
        style={styles.FlatList}
        data={sampleGoals}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a new goal"
          value={newGoal}
          onChangeText={text => setNewGoal(text)}
        />
        <Button
          style={styles.Button}
          title="Add"
          onPress={handleAddGoal}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', //'#123456', //
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 60,
    //marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flexDirection: 'column',
  },
  text: {
    color: 'darkblue',
    fontSize: 20,
    fontWeight: 'bold',
  },
  FlatList:{
    alignSelf: 'stretch',
  },
  goalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  item: {
    flex: 1,
    fontSize: 16,
  },
  removeButton: {
    color: 'red',
    fontSize: 18,
    marginLeft: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    fontSize: 20,
  },
});
*/