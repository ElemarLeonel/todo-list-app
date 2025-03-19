import { View, Text, StyleSheet, ScrollView } from 'react-native'

interface TaskListProps {
    tasks: string[];
}

export default function TaskList({tasks}: TaskListProps){

    return(
        <ScrollView>
            {tasks.map((task, index) => (
                <View key={index} style={styles.taskItem}>
                    <Text style={styles.taskText}>{task}</Text>
                </View>
            ))}

            {tasks.length === 0 && (
                <Text style={styles.emptyText}>
                    Nenhuma tarefa adicionada.
                </Text>
            )}
        </ScrollView>
    )
}