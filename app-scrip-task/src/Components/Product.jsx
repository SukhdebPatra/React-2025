import axios from "axios";
import React, { useEffect, useState } from "react";
import "./product.css";

const Product = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="mainDiv">
        {/* <div className="container">
          <div className="sideBar">
            cos
          </div> */}
          {/* <div className="productList"> */}
            <div className="image-grid">
              {data &&
                data.map((user, id) => (
                  <div className="card" key={id}>
                    <img className="imgtag" src={user.image} alt="" />
                    <div>{user.title}</div>
                    <span>
                      Sign in <span>or Create an Account to see pricing</span>
                    </span>
                  </div>
                ))}
            </div>
          </div>
        {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default Product;
