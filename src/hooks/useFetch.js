import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch();
  });
  const fetch = async () => {
    try {
      const { data: responseData } = await axios.get(url);
      setLoading(false);
      setData(responseData);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return { data, loading, error };
}
