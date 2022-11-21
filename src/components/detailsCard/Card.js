import React, { useEffect } from "react";
import {
  SafeAreaView,
  Image,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from "react-native";
import style from "./style";
export default function Card({ data }) {
  return (
    <SafeAreaView>
      <View style={style.container}>
        <Image style={style.image} source={{ uri: data.strMealThumb }} />
        <View style={style.inner}>
          <Text style={style.title}>{data.strMeal}</Text>
          <Text style={style.area}>{data.strArea}</Text>
        </View>
      </View>
      <Text>{data.strInstructions}</Text>
      <TouchableOpacity
        style={style.button}
        onPress={() => Linking.openURL(data.strYoutube)}
      >
        <Text style={style.buttonText}>Watch on Youtube</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
