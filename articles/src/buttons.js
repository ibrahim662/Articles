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

const Btn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.center}>
      <Text style={styles.title}>Welcome !</Text>
      <Text style={styles.titles}>
        Si vous voulez regarder nos dernies articles :
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Article")}
      >
        <Text>Voir les articles</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.titles}>
          Si vous voulez ajouter votre article :
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Create")}
        >
          <Text>Ajouter un article</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Btn;
