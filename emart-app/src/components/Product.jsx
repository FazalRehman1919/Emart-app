import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(product(addCart(product)));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  //Function to Loading the Products

  const Loading = () => {
    return (
      <>
        <div className="col-md-6" style={{ linHeight: 2 }}>
          <Skeleton height={400} />
        </div>
        <div className="col-md-6">
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  //Function to Show Product
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="diplay-6 fw-bold my-4">$ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => addProduct(product)}
          >
            Add To Cart
          </button>
          <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
            Go To Cart
          </NavLink>
        </div>
      </>
    );
  };

  //Show the load when the data is not coming and if the loading is not load than show the product which is define above already.
  return (
    <div>
      <div className="container py-4">
        <div className="row py-3">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;
