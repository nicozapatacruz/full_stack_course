import React from "react";
import SmallCard from "./SmallCard";
import { useState, useEffect } from "react";
import { API_HOST } from "../constants";

/*  Cada set de datos es un objeto literal */

/* <!-- Products in DB --> */
function DataInDb() {
  const [productsList, setProductList] = useState([]);
  useEffect(() => {
    fetch(`${API_HOST}/api/products`).then((response) =>
      response
        .json()
        .then((data) => {
          setProductList(data.data);
        })
        .catch((error) => {
          console.log(error);
        })
    );
  }, []);
  let products = {
    title: "Cantidad de Productos",
    color: "warning",
    quantity: productsList.length,
    icon: "fa-desktop",
  };

  /* <!-- Consoles in DB --> */
  const [consolesList, setConsolesList] = useState([]);
  useEffect(() => {
    fetch(`${API_HOST}/api/consoles`).then((response) =>
      response
        .json()
        .then((data) => {
          setConsolesList(data.data);
        })
        .catch((error) => {
          console.log(error);
        })
    );
  }, []);
  let consoles = {
    title: "Cantidad de Consolas",
    color: "success",
    quantity: consolesList.length,
    icon: "fa-gamepad",
  };

  /* <!-- Users in DB --> */
  const [usersList, setUserList] = useState([]);
  useEffect(() => {
    fetch(`${API_HOST}/api/users`).then((response) =>
      response
        .json()
        .then((data) => {
          setUserList(data.data);
        })
        .catch((error) => {
          console.log(error);
        })
    );
  }, []);
  let users = {
    title: "Cantidad de Usuarios",
    color: "primary",
    quantity: usersList.length,
    icon: "fa-user-check",
  };

  let cartProps = [products, consoles, users];

  return (
    <div className="row">
      {cartProps.map((data, i) => {
        return <SmallCard {...data} key={i} />;
      })}
    </div>
  );
}

export default DataInDb;
