import React, { useState, useEffect, useParams } from "react";
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

const Editt = ({ route }) => {
  const navigation = useNavigation();

  const [title, onChangeTitle] = React.useState("");
  const [desc, onChangeDesc] = React.useState(null);
  const [edit, setEdit] = React.useState([]);
  const { id } = route.params;

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://10.0.2.2:8000/article/" + id + "/", requestOptions)
      .then((response) => response.json())
      .then((result) => setEdit(result))
      .catch((error) => console.log("error :", error));
  }, []);
  console.log("la c'est l'edit => ", edit);
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

    fetch("http://10.0.2.2:8000/article/" + id + "/edit", requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log("error :", error));
    Alert.alert(
      "Succes",
      "Vous avez modifié votre article",
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
    navigation.navigate("Home");
  }

  return (
    <SafeAreaView>
      <View style={styles.inputs}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeTitle}
          value={edit.title}
          placeholder="titre"
        />
        <TextInput
          style={styles.desc}
          onChangeText={onChangeDesc}
          value={edit.content}
          placeholder="Description"
          multiline={true}
          numberOfLines={10}
        />
      </View>
      <Button title="Modifier" onPress={Verify}></Button>
    </SafeAreaView>
  );
};

export default Editt;
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
