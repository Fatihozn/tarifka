import React, { useEffect } from "react";
import {
  SafeAreaView,
  Text,
  Image,
  ScrollView,
  FlatList,
  Linking,
} from "react-native";
import useFetch from "../../hooks/useFetch";
import DetailsCard from "../../components/detailsCard";
import Loading from "../../components/loading";
import Error from "../../components/error";
export default function Details({ route }) {
  const { name } = route.params;
  const { data, loading, error } = useFetch(
    `${process.env.API_DETAIL} ${name}`
  );

  const renderFunciton = ({ item }) => <DetailsCard data={item} />;

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <SafeAreaView>
      <FlatList renderItem={renderFunciton} data={data.meals} />
    </SafeAreaView>
  );
}
