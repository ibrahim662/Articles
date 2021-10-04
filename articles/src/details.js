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
});

const Articles = ({ route }) => {
  const [details, setDetails] = useState([]);

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
      </View>
    </View>
  );
};

export default Articles;
