import React, { useEffect } from "react";
import {
  SafeAreaView,
  Text,
  Button,
  ActivityIndicator,
  FlatList,
} from "react-native";
import useFetch from "../../hooks/useFetch";
import MealsCard from "../../components/mealsCard";
import Loading from "../../components/loading";
import Error from "../../components/error";
import style from "./style";

export default function Meals({ navigation, route }) {
  const { name } = route.params;
  const { data, loading, error } = useFetch(`${process.env.API_FOOD}${name}`);

  const select = (name) => {
    navigation.navigate("details", { name });
  };
  const renderFunciton = ({ item }) => (
    <MealsCard data={item} select={() => select(item.idMeal)} />
  );
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <SafeAreaView style={style.container}>
      <FlatList renderItem={renderFunciton} data={data.meals} />
    </SafeAreaView>
  );
}
