import React, { useState, useEffect } from "react";
import { API_HOST } from "../constants";
// import imagenFondo1 from "../assets/images/1646103572318_product.JPG";
// import imagenFondo2 from "../assets/images/1646103572318_product.JPG";
// import imagenFondo3 from "../assets/images/1646103572318_product.JPG";

function ProductsInDb() {
  const [productList, setProductList] = useState([]);
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
  console.log(productList);
  return (
    <div className="row">
      {productList.map((product, i) => {
        console.log(product);
        let productImage = `../../../website/public/images/productos/${product.product_image}`;
        console.log(productImage);
        return (
          <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">{product.name}</h5>
              </div>
              <div key={i} className="card-body">
                <div className="text-center">
                  <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + "rem" }} src={process.env.PUBLIC_URL + `/img/${product.product_image}`} alt="imagen producto" />
                  <p>{product.price}</p>
                  <p>{product.description}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductsInDb;
