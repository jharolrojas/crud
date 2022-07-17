import axios from "axios";
import React, { useEffect, useState } from "react";

const useGetData = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setDatos(res.data));
  }, []);
  const getData = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setDatos(res.data));
  };

  const createUser = (user) => {
   
    axios
      .post("https://users-crud1.herokuapp.com/users/", user)
      .then(() => getData())
      .catch((err) => console.log(err));
  };
  const deleteUser = (id) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getData())
      .catch((err) => console.log(err));
  };
  const updateUser = (id, user) => {
    axios
      .put(`https://users-crud1.herokuapp.com/users/${id}/`, user)
      .then(() => getData())
      .catch((err) => console.log(err));
      
      
  };

  return { datos, createUser, deleteUser, updateUser, getData };
};

export default useGetData;
