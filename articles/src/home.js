const styles = StyleSheet.create({
  artc: {
    flex: 1,
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },

  title: {
    fontSize: 25,
  },

  btnText: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
  },
  btnD: {
    backgroundColor: "black",
    padding: 5,
    borderRadius: 4,
    flexDirection: "row",
    left: 300,
    alignItems: "center",
  },
  bTXT: {
    color: "yellow",
  },
  tit: {
    color: "black",
    fontSize: 15,
    padding: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
});

import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    fetch("http://10.0.2.2:8000/article/", requestOptions)
      .then((response) => response.json())
      .then((result) => setArticles(result))
      .catch((error) => console.error(error));
  }, []);

  const render = ({ item }) => {
    return (
      <View style={styles.artc}>
        <ScrollView style={{ flex: 1 }}>
          <Text style={styles.tit}>{item.title}</Text>
          <TouchableOpacity
            style={styles.btnD}
            onPress={() => navigation.navigate("Details", { id: item.id })}
          >
            <Text style={styles.bTXT}>VOIR PLUS</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      {/* <Text style={{fontSize:18,fontWeight:'bold'}}>React Native FlatList Load More On Scroll</Text> 
  <Text style={{fontSize:16,fontWeight:'bold'}}>Programming with savio</Text> */}
      <FlatList
        data={articles}
        renderItem={render}
        keyExtractor={(item, i) => i.toString()}
      />
    </SafeAreaView>
  );
};

export default Articles;
