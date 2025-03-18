import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import { Pessoa } from "./src/components/Pessoa";

export default function App() {
  interface Usuario {
    name: string;
    idade: number;
    dataNascimento?: string;
  }

  const user: Usuario = {
    name: "Renan",
    idade: 20,
    dataNascimento: new Date("2022-01-01").toISOString(),
  };

  const users: Usuario[] = [
    {
      name: "Elemar",
      idade: 20,
      dataNascimento: new Date("2022-01-01").toISOString(),
    },
    {
      name: "Renan",
      idade: 25,
      dataNascimento: new Date("1998-01-01").toISOString(),
    },
    {
      name: "Elias",
      idade: 20,
      dataNascimento: new Date("1999-05-01").toISOString(),
    },
  ];

  users.push({
    name: "João da Silva",
    idade: 30,
    dataNascimento: new Date("2000-21-12").toISOString()
  })

  users.pop();

  // let name = "Elemar";
  // let idade = 20;
  // let dataNascimento = "2022-01-01";

  return (
    <View style={styles.container}>
      <Text>Olá mundo 2!</Text>
      <StatusBar style="auto" />
      {/* <Text style={{ fontSize: 30 }}>{ name }</Text>
      <Text style={{ fontSize: 30 }}>{ idade }</Text>
      <Text style={{ fontSize: 30 }}>{ dataNascimento }</Text> */}
      {users.map((user, index) => {
        return (
          <View key={index}>
            <Text style={{ fontSize: 30 }}>{user.name}</Text>
            <Text style={{ fontSize: 30 }}>{user.idade}</Text>
            <Text style={{ fontSize: 30 }}>{user.dataNascimento}</Text>
          </View>
        );
      })}

      <Text style={{ fontSize: 30 }}>{user.name}</Text>
      <Text style={{ color: "red", fontSize: 24, fontFamily: "monospace" }}>
        Olá mundo 1!
      </Text>
      <Image
        source={require("./assets/favicon.png")}
        width={100}
        height={100}
      />
      <TextInput placeholder="Digite algo..."></TextInput>
      <Pessoa nome="Vinicius" idade={20} ativa />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
