import React from "react";
import { View, Image, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import style from "./style";
export default function Card({ data, select }) {
  // en son burada kaldım categori card ı tasarla

  return (
    <TouchableWithoutFeedback onPress={select}>
      <View style={style.container}>
        <Image style={style.image} source={{ uri: data.strCategoryThumb }} />
        <Text style={style.title}>{data.strCategory}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
