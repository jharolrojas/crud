import axios from "axios";
import React, { useEffect, useState } from "react";

const useGetData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://users-crud.academlo.tech/users/")
      .then((res) => setData(res.data));
  }, []);
  const getData = () => {
    axios
      .get("https://users-crud.academlo.tech/users/")
      .then((res) => setData(res.data));
  };

  const createUser = (user) => {
    axios
      .post("https://users-crud.academlo.tech/users/", user)
      .then(() => getData())
      .catch((err) => console.log(err));
  };
  const deleteUser = (id) => {
    axios
      .delete(`https://users-crud.academlo.tech/users/${id}/`)
      .then(() => getData())
      .catch((err) => console.log(err));
  };
  const updateUser = (id, user) => {
    axios
      .put(`https://users-crud.academlo.tech/users/${id}/`, user)
      .then(() => getData())
      .catch((err) => console.log(err));
  };

  return { data, createUser, deleteUser, updateUser, getData, setData };
};

export default useGetData;
