import React, { useEffect, useState, useCallback } from "react";
import Layout from "@components/Layout";
import axios from "axios";
import Product from "@components/Card";
import { getProducts } from "../services/getProduct";
// import Product from '../components/Card/card'
import LoadingSpinner from "@components/LoadingSpinner";

interface Item {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  image:string;
}

const ListItems: React.FC = () => {
  const [item, setItem] = useState<Item[]>([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getProducts()
      .then((response) => {
        // do something with JSON response data
        console.log(response.data);
        setIsLoading(true);
        setItem(response.data.products);
        console.log(response.data.products);

        // setItem(response.data.products)
        setIsLoading(false);
      })
      .catch(() => {
        setErrorMessage("Unable to fetch products list");
        setIsLoading(false);
      });
  }, []);

  return (
    <Layout>
      <div className="ms-4">

      <h2 className="mt-2">List of Products</h2>
      <br />
      <div>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          item.map((item) => {
            return (
              <Product
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                discountPercentage={item.discountPercentage}
                image={item.images[0]}
              />
            );
          })
        )}
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
      </div>
      </div>
 
    </Layout>
  );
};

export default ListItems;
