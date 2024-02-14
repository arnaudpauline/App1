import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Modal, StyleSheet } from 'react-native';

const GoalModal = ({ visible, onClose, onSave, editedGoal, editedGoalIndex }) => {
    const [newGoal, setNewGoal] = useState(editedGoal);

    useEffect(() => {
        setNewGoal(editedGoal);
    }, [editedGoal]);

    const handleSave = () => {
        onSave(newGoal, editedGoalIndex);
        onClose();
    };

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.modalContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Edit goal"
                    value={newGoal}
                    onChangeText={text => setNewGoal(text)}
                />
                <View style={styles.buttonContainer}>
                    <Button title="Save" onPress={handleSave} />
                    <Button title="Cancel" onPress={onClose} color="red" />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        fontSize: 18,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
    },
});

export default GoalModal;
