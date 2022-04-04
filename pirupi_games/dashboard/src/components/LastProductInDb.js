import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_HOST } from "../constants";

function LastProductInDb() {
  //Fetch del producto
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

  //Fetch de la imagen
  const index = productList.length - 1;
  let image = "";
  if (productList.length > 0) {
    image = productList[index].product_image;
    console.log(image);
  }
  const imageUrl = image == "" ? `${API_HOST}/images/productos/1646103730386_product.jpeg` : `${API_HOST}/images/productos/${image}`;
  console.log(imageUrl);
  const [img, setImg] = useState();
  const fetchImage = async () => {
    const res = await fetch(imageUrl);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);
  };
  useEffect(() => {
    fetchImage();
  }, [imageUrl]);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">Último producto en la base de datos</h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            {productList.length > 0 && <p>{productList[index].name}</p>}
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + "rem" }} src={img} alt="Imagen producto" />
            {productList.length > 0 && <p>{productList[index].description}</p>}
            <Link to="/ProductsInDb" exact="true" className="btn btn-danger" rel="nofollow">
              Ver todos los productos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastProductInDb;
