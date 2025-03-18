import { View, Text } from "react-native";

interface Pessoa {
    nome: string,
    idade: number,
    ativa: boolean
}

export function Pessoa(pessoa: Pessoa) {
    return (
        <View>
            <Text style={{color: 'red', fontSize: 48}}>
            {pessoa.nome}
            </Text>
            <Text style={{color: 'red', fontSize: 48}}>
            {pessoa.idade}
            </Text>
            <Text style={{color: 'red', fontSize: 48}}>
            {pessoa.ativa ? "Ativa" : "Inativa"}
            </Text>
        </View>
    )
}