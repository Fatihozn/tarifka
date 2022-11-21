import React from "react";
import { TouchableWithoutFeedback, Image, Text, View } from "react-native";
import style from "./style";

export default function Card({ data, select }) {
  return (
    <TouchableWithoutFeedback onPress={select}>
      <View style={style.container}>
        <Image style={style.image} source={{ uri: data.strMealThumb }} />
        <View style={style.titleView}>
          <Text style={style.title}>{data.strMeal}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
