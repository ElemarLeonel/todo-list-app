import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";

interface TaskInputProps {
    value: string;
    placeholder: string;
    // Função anônima
    onChangeText: (text: string) => void;
    onSubmit: () => void;
}

export default function TaskInput({value, onChangeText, placeholder, onSubmit}: TaskInputProps){
    return(
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.input} 
            value={value} 
            onChangeText={onChangeText} 
            placeholder={placeholder}>
                <TouchableOpacity style={styles.button} onPress={onSubmit}>
                    Enviar
                </TouchableOpacity>
            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 10
    },
    input: {
        flex: 1,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 15, // Espaçamento no eixo x (esquerda e direita)
        marginRight: 10,
        fontSize: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0, // Largura da sombra
            height: 2, // Altura da sombra
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3
    },
    button: {
        width: 50,
        height: 50,
        backgroundColor: "#3498DB",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3
    }
})