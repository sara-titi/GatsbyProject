import axios from 'axios';
import {Product} from "./defines";
export const getProducts =  () => {
    return axios
    .get<Product[]>('https://dummyjson.com/products')
    .then((response) => {
               return response;
              });
  };