import React, { useState, useEffect, useParams } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    top: 50,
  },
  title: {
    fontSize: 25,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom: 10,
  },
  del: {
    marginBottom: 10,
  },
});

const Articles = ({ route }) => {
  const [details, setDetails] = useState([]);
  const [del, setDel] = useState([]);
  const navigation = useNavigation();

  const { id } = route.params;
  console.log(id);
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    fetch("http://10.0.2.2:8000/article/" + id, requestOptions)
      .then((response) => response.json())
      .then((result) => setDetails(result))
      .catch((error) => console.error(error));
  }, []);
  console.log(details.content);

  return (
    <View key={details.title}>
      <View style={styles.artc}>
        <Text>{details.title}</Text>
        <Text>{details.content}</Text>
        <View style={styles.del}>
          <Button
            onPress={() => {
              navigation.navigate("Edit", { id: details.id });
            }}
            title="Modifier cet article"
          ></Button>
        </View>
        <Button
          onPress={() => {
            fetch("http://10.0.2.2:8000/article/" + details.id, {
              method: "DELETE",
            })
              .then((response) => response.json())
              .then((result) => setDel(result))
              .catch((error) => console.error(error));
            alert("vous avez supprimé l'article " + details.title);
            navigation.navigate("Home");
          }}
          title="Supprimer cet article"
        ></Button>
      </View>
    </View>
  );
};

export default Articles;
