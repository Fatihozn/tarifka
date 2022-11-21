import React, { useEffect } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  SafeAreaView,
  Text,
} from "react-native";
import useFetch from "../../hooks/useFetch";
import CategoriesCard from "../../components/categoriesCard";
import Loading from "../../components/loading";
import Error from "../../components/error";
import style from "./style";

export default function Categories({ navigation }) {
  const { data, loading, error } = useFetch(process.env.API_CATEGORY);

  const select = (name) => {
    navigation.navigate("meals", { name });
  };
  const renderFunciton = ({ item }) => (
    <CategoriesCard data={item} select={() => select(item.strCategory)} />
  );

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <SafeAreaView style={style.container}>
      <FlatList renderItem={renderFunciton} data={data.categories} />
    </SafeAreaView>
  );
}
