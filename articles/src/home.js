import React, { useState, useEffect, useParams } from "react";
import { Text, View, TouchableOpacity, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const styles = StyleSheet.create({
  artc: {
    alignItems: "flex-start",
    top: 50,
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
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom: 10,
  },
});

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
  console.log(articles);
  return articles.map((article) => {
    return (
      <View key={article.title}>
        <View style={styles.artc}>
          <Text>{article.title}</Text>
          {/* <Button
                        title='Voir plus'
                        onPress={() => history.push({"/articles/":{id}})}
                    ></Button> */}
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", { id: article.id })}
          >
            <Text>Voir PLus</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  });
};

export default Articles;
