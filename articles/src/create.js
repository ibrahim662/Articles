import * as React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  StyleSheet,
  Alert,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";

const Create = () => {
  const navigation = useNavigation();

  const [title, onChangeTitle] = React.useState("");
  const [desc, onChangeDesc] = React.useState(null);

  function Verify() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      title: title,
      content: desc,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://10.0.2.2:8000/article/new", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error :", error));
    Alert.alert(
      "Succes",
      "Merci, Votre article a été crées",
      [
        {
          text: "Retour",
          style: "cancel",
        },
      ],
      {
        cancelable: true,
      }
    );
  }

  return (
    <SafeAreaView>
      <View style={styles.inputs}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeTitle}
          value={title}
          placeholder="Titre"
        />
        <TextInput
          style={styles.desc}
          onChangeText={onChangeDesc}
          value={desc}
          placeholder="Description"
          multiline={true}
          numberOfLines={10}
        />
      </View>
      <TouchableOpacity onPress={Verify} style={styles.appButtonContainer}>
        <Text style={styles.appButtonText}> Ajouter votre article </Text>
      </TouchableOpacity>

      <Button
        style={styles.btnn}
        title="voir tous les articles"
        onPress={() => navigation.navigate("Article")}
      />
    </SafeAreaView>
  );
};

export default Create;
const styles = StyleSheet.create({
  inputs: {
    marginTop: 200,
  },
  input: {
    height: 45,
    marginBottom: 10,
    borderWidth: 1,
    width: 200,
    left: 110,
    padding: 5,
    borderRadius: 15,
    backgroundColor: "white",
  },
  desc: {
    height: 150,
    justifyContent: "flex-end",
    marginBottom: 10,
    borderWidth: 1,
    width: 380,
    left: 10,
    padding: 5,
    borderRadius: 15,
    backgroundColor: "white",
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "black",
    borderRadius: 15,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    alignSelf: "center",
  },
  container: {
    color: "black",
    backgroundColor: "black",
    flex: 1,
  },
});
